export default function Preview({sharedData}){

  function jsonify_data(){}

  return(
    <div className=" p-2 bg-slate-800 rounded-xl text-white font-mono">
      [{sharedData}]
    </div>

  );

}