export default function Preview({sharedData}){

  function jsonify_data(){}

  return(
    <div className=" p-3 bg-slate-800 rounded-xl text-white font-mono">
      <div className=" p-1 bg-slate-800 rounded-xl">
        <span className="my-2 mx-1 h-4 w-4 bg-red-500 rounded-xl inline-block"></span>
        <span className="my-2 mx-1 h-4 w-4 bg-yellow-500 rounded-xl inline-block"></span>
        <span className="my-2 mx-1 h-4 w-4 bg-green-500 rounded-xl inline-block"></span>
      </div>
    
      [{sharedData}]
    </div>

  );

}