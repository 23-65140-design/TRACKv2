import React from "react";
export default function SelectDropdown({options=[]}) {
  return <select className={styles.select}>{options.map((o,i)=><option key={i}>{o}</option>)}</select>;
}
