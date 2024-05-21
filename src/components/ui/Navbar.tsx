"use client"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "../pages/aboutus/page";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
