  import { useState } from 'react';

  export default function Input( {index, setSharedData} ){

    let styleClass = "border-cyan-700 border-2 rounded-md";
    let styleSelector = "p-2 border-2 rounded-md bg-cyan-700 text-white font-black";
    const [data, SetData] = useState();

    const updateSharedData = (event) => {
      let form = event.target.form;
      let formData = filteringForm(form);
      setSharedData(JSON.stringify(formData));
    }

    function filteringForm(form){
      let formElements = form.children;
      let bruteData = [...formElements];
      bruteData.pop()    

      let data = bruteData.map(data_div => {
        let nameData = data_div.children[0].children[1].value;
        let typeData = data_div.children[1].children[2].value;
        return {name: nameData, type:typeData};
      });

      return data;
    }


    return(
      <div className="flex justify-around items-start max-[950px]:flex-col">

        <div className="flex-row">
          <label className="block" htmlFor={`input-${index}`}>Field {index}</label>
          <input className={styleClass} type="text" id={`input-${index}`} onChange={updateSharedData}/><br/>
        </div>    

        <div className="flex-row">
          <label htmlFor={`input-${index}-type`}>Tipo Primitivo</label><br/>
          <select className={styleSelector} name={`input-${index}-type`} id={`input-${index}-type`} onChange={updateSharedData}>
              <option className={styleSelector} value="int">integer</option>
              <option className={styleSelector} value="float">float</option>
              <option className={styleSelector} value="str">string</option>
              <option className={styleSelector} value="bool">boolean</option>
              <option className={styleSelector} value="null">null</option>
          </select>
        </div>
    
      </div>    
    );

  };