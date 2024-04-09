import { Button } from "@mui/material";
import { useSome } from "./hooks/services/useSome";

function App() {
  const { some } = useSome();
  // return <div className="text-3xl text-red-400 font-bold underline">App</div>;
  return <Button variant="contained">Hello world</Button>;
}

export default App;
