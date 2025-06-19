import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ChatPage from "@/pages/chat";
import AboutPage from "@/pages/about";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ChatPage />} path="/chat" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blogs" />
    </Routes>
  );
}

export default App;
