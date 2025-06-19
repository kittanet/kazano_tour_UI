import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ChatPage from "@/pages/chat";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ChatPage />} path="/chat" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
    </Routes>
  );
}

export default App;
