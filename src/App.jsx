import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./pages/Crud";

import Header from "./components/Header";
import Counter from "./pages/counter";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
