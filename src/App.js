import "./App.css";
import {  Routes, Route} from "react-router-dom";
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
import MakeAdmin from "./Firebase/MakeAdmin/MakeAdmin";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import AddFacility from "./Components/AddFacility/AddFacility";
import SendEmail from "./Components/SendEmail/SendEmail";
import Payment from "./Components/Payment/Payment";
import BookPlan from "./Components/BookPlan/BookPlan";



function App() {
  return (
    <div className="App">
     
      
      {/* <Router> */}
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment/:planId" element={<Payment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={ <Gallery />} />
          <Route path="/contact" element={<Contact />} />    
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />  
          <Route path="/bookplan/:planId" element={<BookPlan />} />  
          {/* <Route path="/sendEmail" element={<SendEmail />} />   */}
          <Route path="/dashbaord" element={<Dashbord />}>
            <Route path="pending" element={<PendingForm />}/>
            <Route path="facilities" element={<Facilities />} />
            <Route path="addFacility" element={<AddFacility />} />

            {/* <Route path="makeadmin" element={<AdminRoute> <MakeAdmin /> </AdminRoute>} /> */}
            <Route path="makeadmin" element={ <MakeAdmin /> } />
          </Route>
         
          {/* <Route path="/SingleProductDetails/:id" element={<Singleproduct />} />  */}
        </Routes>
      {/* </Router> */}
     
      {/* <Footer/> */}
    </div>
  );
}

export default App;
