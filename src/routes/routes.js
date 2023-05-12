import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// pages
import Home from "../pages/Home";
import Favorites from "pages/Favorites";
import NotFound from "pages/NotFound";

// layouts
import MainLayout from "layouts/MainLayout";

// providers
import FavoritesProvider from "contexts/FavoritesContext";

export default function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoritesProvider>
      </MainLayout>
    </BrowserRouter>
  );
}
