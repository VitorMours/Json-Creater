import { useState } from 'react';
import Input from './Input.jsx';
import FormCreateButton from './Form.jsx';

export default function Creator({sharedData, setSharedData}){

  const [camps, setCamps] = useState([]);


  const addField = (event) => {
    event.preventDefault();
    setCamps((prevCamp) => [...prevCamp, prevCamp.length+1]);
  }



  return(
    <article className="break-words">
      <h3 className="flex font-semibold text-lg justify-center">Crie o campo e insira os dados</h3>
  
      <form className="flex-row justify-center">
        {camps.map((index) => (
           <Input key={index} index={index} setSharedData={setSharedData}/>
        ))}
        <div className="flex justify-center">
          <FormCreateButton addField={addField}/>


        </div>
      </form>

    </article>
  );
}
