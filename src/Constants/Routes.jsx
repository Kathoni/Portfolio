import React, { Suspense } from "react";
import { appLinks } from "./Links";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));
function BaseRouter() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path={appLinks?.Home} element={<Home />} />
            <Route path={appLinks?.Projects} element={<Projects />} />
            <Route path={appLinks?.Contact} element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default BaseRouter;