import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Login from "../pages/Login";
import MyInfo from "../pages/MyInfo";
import Layout from "../pages/Layout";
import PrivateLayout from "../pages/PrivateLayout";
import OAuth2RedirectHandler from "../auth/OAuth2RedirectHandler";
import ProductDetail from "../pages/ProductDetail";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sticker/:id" element={<ProductDetail />} />
        <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />}></Route>
        <Route element={<PrivateLayout />}>
          <Route path="/myInfo" element={<MyInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
