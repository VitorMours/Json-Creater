import { useState } from 'react';
import Input from './Input';

export default function FormCreateButton( {addField} ){
  return(
        <button onClick={addField} className="flex p-1 mt-3 bg-cyan-700 rounded-3xl justify-center place-self-center
                            hover:bg-cyan-500 hover:px-3 duration-100 hover:-translate-y-1 hover:shadow-md
                            active:translate-y-1 active:bg-cyan-900
                            ">
          <span className="material-symbols-outlined">add</span>
        </button>
  );

}