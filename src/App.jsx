import { Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="*" element={<h1>Error</h1>} />
    </Routes>
  );
}

export default App;
