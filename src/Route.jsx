import { Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/Blog";
import CardDetail from "./components/card/cardDetail/CardDetail";

function Routerage() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<CardDetail />} />
      </Routes>
  );
}

export default Routerage;
