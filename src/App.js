import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
