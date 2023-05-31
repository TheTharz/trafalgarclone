import React from "react";
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Feature from './components/Feature.jsx';
import Details from './components/Deatils.jsx';
import Testimonials from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <Feature/>
      <Details/>
      <Testimonials/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
