import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ChatPage from "@/pages/chat";
import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ChatPage />} path="/chat" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<BlogPage />} path="/blogs" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
