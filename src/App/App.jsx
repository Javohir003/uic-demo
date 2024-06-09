import React, { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SecondPage from "../Second-Page/SecondPage";
import "./App.scss";
// import ServicesPage from "../ServicesPage(Hozircha Arxiv))/ServicesPage";
import Partnyor from "../Partnyor/Partnyor";
import Footer from "../Footer/Footer";
import BlogPage from "../BlogPage/BlogPage";
import Home from "../Home/Home";
import Servicess from "../Servicess/Servicess";
import Portfolio_Page from "../Portfolio-Page/Portfolio_Page";
import About from "../About/About";
import Vacansies from "../Vacansies/Vacansies";
import NavbarLayout from "../Layout/NavbarLayout";
import DetailVacansy from "../Detail/Vacansy/DetailVacansy";
import ArticlesLayout from "../Layout/ArticlesLayout";
import BoxFooter from '../Footer/Along/FooterBox'
import DetailServices from "../Detail/Services/DetailServices";
import DetailPortfolio from "../Detail/Portfolio/DetailPortfolio";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavbarLayout />}>
        <Route
          index
          element={
            <>
              <Home />
              <SecondPage />
              <Portfolio_Page />
              <Servicess/>
              <Partnyor />
              <BoxFooter/>
            </>
          }
        />
        <Route path=":lang/about" element={<About />} />
        <Route path=":lang/portfolio" element={<ArticlesLayout/>}>
          <Route index element={<Portfolio_Page/>} />
          <Route path=":id" element={<DetailPortfolio/>}/>
        </Route>
        <Route path=":lang/services" element={<ArticlesLayout/>}>
          <Route index element={<Servicess />}/>
          <Route path=":id" element={<DetailServices/>} />
        </Route>
        <Route path=":lang/vacancies" element={<ArticlesLayout />}>
          <Route index element={<Vacansies />} />
          <Route path=":id" element={<DetailVacansy />} />
        </Route>
        <Route path=":lang/blog" element={<BlogPage />} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={routes} />
        <Footer/>
      </div>
    </>
  );
};

export default App;
