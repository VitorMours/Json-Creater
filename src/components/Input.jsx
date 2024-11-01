import { useState } from 'react';

export default function Input( {index} ){

  let styleClass = "border-cyan-700 border-2 rounded-md"
  let styleSelector = "p-2 border-2 rounded-md bg-cyan-700 text-white font-black"

  return(
    <div className="flex justify-around items-end">

      <div className="flex-row">
        <label className="block" htmlFor={`input-${index}`}>Field {index}</label>
        <input className={styleClass} type="text" id={`input-${index}`}/><br/>
      </div>    

      <div className="flex-row">
        <label htmlFor={`input-${index}-type`}>Tipo Primitivo</label><br/>
        <select className={styleSelector} name={`input-${index}-type`} id={`input-${index}-type`}>
            <option value="int">integer</option>
            <option value="str">string</option>
            <option value="bool">boolean</option>
            <option value="null">null</option>
        </select>
      </div>
   
    </div>    
  );

};