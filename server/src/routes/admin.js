const express = require('express');
const router = express.Router();
const { requireAdmin } = require('../middleware/auth');

router.get('/me', requireAdmin, (req, res) => {
  res.json({
    ok: true,
    message: 'You are an admin',
    adminId: req.adminId,
    userId: req.userId
  });
});

module.exports = router;