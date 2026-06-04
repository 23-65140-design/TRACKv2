const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { User, Admin, UserSession } = require('../models');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ ok: false, message: 'Username and password are required.' });
    }

    // 1. Find user
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ ok: false, message: 'Invalid credentials.' });
    }

    if (user.status === 'blocked' || user.status === 'suspended') {
      return res.status(403).json({ ok: false, message: 'Your account is blocked or suspended.' });
    }

    // 2. Verify password
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ ok: false, message: 'Invalid credentials.' });
    }

    // 3. Check if admin
    const admin = await Admin.findOne({ where: { user_id: user.id, is_active: true } });
    if (!admin) {
      return res.status(403).json({ ok: false, message: 'Unauthorized. Admin access only.' });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      { userId: user.id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 5. Create session
    await UserSession.create({
      id: uuidv4(),
      user_id: user.id,
      token: token,
      status: 'active',
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day
    });

    // 6. Return
    res.json({
      ok: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        status: user.status,
        is_admin: true
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};