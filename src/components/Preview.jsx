import { useState, useEffect } from 'react';
export default function Preview({ sharedData }) {

  const [jsonObject, setJsonObject] = useState({});

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
        json[item.name] = item.type;
      }
      return json;
    }, {});

    setJsonObject(result);
  }, [sharedData]);


  const copyToClipboard = () => {
    const jsonStr = JSON.stringify(jsonObject, null, 2);
    navigator.clipboard.writeText(jsonStr)
      .then(() => {
        // nada
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
          className=" p-2 text-white border border-transparent 
                      rounded-md bg-transparent"
        >
          <span class="material-symbols-outlined">content_copy</span>
        </button>
      </div>
      <pre className="mt-4">
        {JSON.stringify(jsonObject, null, 2)}
      </pre>
    </div>
  );
}

// sharedData.reduce((iterator, actualObject) => {return console.log(actualObject)})