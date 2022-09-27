import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About/About";
import Facilities from "./Components/Home/Facilities/Facilities";
import Gallery from "./Components/Home/Gallery/Gallery";
import Contact from "./Components/Home/Contact/Contact";
import Login from "./Components/Home/Login/Login";
import Registration from "./Components/Home/Registration/Registration";
import Dashbord from "./Components/Deshbord/Deshbord";
import PendingForm from "./Components/Deshbord/PendingForm/PendingForm";


function App() {
  return (
    <div className="App">
     
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={ <Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />  
          <Route path="/dashbaord" element={<Dashbord />}>
            <Route path="dashbaord/pending" element={<PendingForm />}>

            </Route>

          </Route>
          {/* <Route path="/pending" element={<PendingForm/>} /> */}
          
          {/* <Route path="/SingleProductDetails/:id" element={<Singleproduct />} />  */}
        </Routes>
      </BrowserRouter>
     
      {/* <Footer/> */}
    </div>
  );
}

export default App;
