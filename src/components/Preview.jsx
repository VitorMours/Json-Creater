export default function Preview({ sharedData }) {

  // TODO: Fazer DE ALGUMA FORMA esses dados virarem json, não sei como que vou fazer isso
  // mas tenho que fazer

  return (
    <div className="p-3 bg-slate-800 rounded-xl text-white font-mono break-words">
      <div className="p-1 bg-slate-800 rounded-xl">
        <span className="my-2 mx-1 h-4 w-4 bg-red-500 rounded-xl inline-block"></span>
        <span className="my-2 mx-1 h-4 w-4 bg-yellow-500 rounded-xl inline-block"></span>
        <span className="my-2 mx-1 h-4 w-4 bg-green-500 rounded-xl inline-block"></span>
      </div>
      <pre className="mt-4">
        {JSON.stringify(jsonObject, null, 2)}
      </pre>
    </div>
  );
}
