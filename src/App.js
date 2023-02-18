
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
    <ToastContainer  position = "top-right"  autoClose="2000"/>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
