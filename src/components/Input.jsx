import { useState } from 'react';

export default function Input( {index, setSharedData} ){

  let styleClass = "border-cyan-700 border-2 rounded-md"
  let styleSelector = "p-2 border-2 rounded-md bg-cyan-700 text-white font-black"

  const updateSharedData = (event) => {
    let form = event.target.form;
    filteringForm(form);
    console.log(form);

    //console.log(campsArray);
    //setSharedData(...campsArray);
  }

  function filteringForm(form){
    let formElements = form.children;
    let bruteData = [...formElements];
    bruteData.pop()    
    console.log(bruteData);
    //let data = bruteData.filter((elements) => elements.t)
    //return data;
  }


  return(
    <div className="flex justify-around items-end">

      <div className="flex-row">
        <label className="block" htmlFor={`input-${index}`}>Field {index}</label>
        <input className={styleClass} type="text" id={`input-${index}`} onChange={updateSharedData}/><br/>
      </div>    

      <div className="flex-row">
        <label htmlFor={`input-${index}-type`}>Tipo Primitivo</label><br/>
        <select className={styleSelector} name={`input-${index}-type`} id={`input-${index}-type`} onChange={updateSharedData}>
            <option className={styleSelector} value="int">integer</option>
            <option className={styleSelector} value="str">string</option>
            <option className={styleSelector} value="bool">boolean</option>
            <option className={styleSelector} value="null">null</option>
        </select>
      </div>
   
    </div>    
  );

};