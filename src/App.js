import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import List from "./components/List";
import Detail from "./components/Detail";


function App() {
  let { userId } = useParams();
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
