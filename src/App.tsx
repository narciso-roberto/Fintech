import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import VendasPage from "./pages/VendasPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<DefaultLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="vendas" element={<VendasPage />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
