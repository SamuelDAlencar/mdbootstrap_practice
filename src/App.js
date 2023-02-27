import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/empreiteiro"
          element={<Home entity="empreiteiro" />}
        />
        <Route exact path="/fiscal" element={<Home entity="fiscal" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
