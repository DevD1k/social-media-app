import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
