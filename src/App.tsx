import { useSome } from "./hooks/services/useSome";


function App() {
  const { some } = useSome();
  return <div className="text-3xl text-tahiti font-bold underline">App</div>;
}

export default App;
