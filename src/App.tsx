import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Box from "./Box";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Box />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
