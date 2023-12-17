/** @format */

import React from "react";
// import Main from "./RandomJokes/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Routes/Header";

import About from "./Components/Routes/About";
import Contact from "./Components/Routes/Contact";
import Singleblog from "./Components/Routes/Singleblog";
import Home from "./Components/Routes/Home";
import Blog from "./Components/Routes/Blog";
import { useParams } from "react-router-dom";

function App() {
  const { id } = useParams();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<Singleblog />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Main /> */}
    </div>
  );
}
 
export default App;
