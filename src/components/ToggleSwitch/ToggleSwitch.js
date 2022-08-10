
import React from "react";
  
export default function ToggleSwitch({ handleOnClickChangePrice, checked }){
  return (
    <label className="switch">
      <input checked={checked} readOnly onClick={handleOnClickChangePrice} type="checkbox"/>
      <span className={`slider round`}></span>
    </label>
  );
}