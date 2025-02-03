import React from "react";
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AnimePage from "./pages/AnimePage.jsx";
import MangaPage from "./pages/MangaPage.jsx";
import AnimeDetail from "./pages/AnimeDetail.jsx";
import MangaDetail from "./pages/MangaDetail.jsx";

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="/manga" element={<MangaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="/manga/:id" element={<MangaDetail />}  />
            <Route path="/manga-details" element={<MangaDetail />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Route>
    ))

    return <RouterProvider router={router} />;
}

export default App
