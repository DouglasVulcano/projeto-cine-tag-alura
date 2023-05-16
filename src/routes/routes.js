import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// pages
import Home from "../pages/Home";
import Favorites from "pages/Favorites";
import NotFound from "pages/NotFound";
import Player from "pages/Player";

// layouts
import MainLayout from "layouts/MainLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
