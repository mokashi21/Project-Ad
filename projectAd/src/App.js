import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAds from "./components/CreateAds";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TextAd from "./components/TextAd";
import Media from "./components/Media";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create-ads" element={<CreateAds />} />
        <Route path="/text-ads" element={<TextAd />} />
        <Route path="/media-ads" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
