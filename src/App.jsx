import { BrowserRouter } from "react-router-dom";
import Routers from "@/Routers";

function App() {
  return (
    <div className="text-red-500">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
