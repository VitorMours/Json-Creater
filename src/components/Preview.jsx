import { useState, useEffect } from 'react';
let Chance = require('chance');

export default function Preview({ sharedData }) {
  const [jsonObject, setJsonObject] = useState({});
  
  function generateData(type) {
    let data = null;
    
    if (type === "str") {
      data = Chance().string();
    } else if (type === "bool") {
      data = Chance().bool();
    } else if (type === "int") {
      data = Chance().integer();
    } else if (type === "float") {
      data = Chance().floating();
    }
    return data;
  }

  useEffect(() => {
    let parsedArray = [];
    
    if (typeof sharedData === 'string') {
      try {
        parsedArray = JSON.parse(sharedData);
      } catch (error) {
        console.error('Json string parse error:', error);
      }
    } else {
      parsedArray = sharedData;
    }

    const result = parsedArray.reduce((json, item) => {
      if (item.name && item.type) {
        let generatedData = generateData(item.type);
        json[item.name] = generatedData;
      }
      return json;
    }, {});

    setJsonObject(result);
  }, [sharedData]);

  const copyToClipboard = () => {
    const jsonStr = JSON.stringify(jsonObject, null, 2);
    navigator.clipboard.writeText(jsonStr)
      .then(() => {
        // Mudar para "Check" após copiar
        
        // Voltar ao ícone de copiar após 1 segundo
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="p-3 bg-slate-800 rounded-xl text-white font-mono break-words">
      <div className="flex justify-between p-1 bg-slate-800 rounded-xl">
        <div>
          <span className="my-2 mx-1 h-4 w-4 bg-red-500 rounded-xl inline-block"></span>
          <span className="my-2 mx-1 h-4 w-4 bg-yellow-500 rounded-xl inline-block"></span>
          <span className="my-2 mx-1 h-4 w-4 bg-green-500 rounded-xl inline-block"></span>
        </div>
        <button
          type="button"
          onClick={copyToClipboard}
          className="p-2 text-white border border-transparent rounded-md bg-transparent"
        >
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </div>
      <pre className="mt-4">
        {JSON.stringify(jsonObject, null, 2)}
      </pre>
    </div>
  );
}
