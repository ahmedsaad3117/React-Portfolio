import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import BodyImg from "./components/BodyImg/BodyImg";
import AboutUs from "./components/AboutUS/AboutUs";
import Card from "./components/Cards/Card";
import ContactUs from "./components/ContactUs/ContactUs"


function App() {
  return (
    <div>
      <NavBar />
      <BodyImg />
      <AboutUs/>
      <div className="d-flex justify-content-center ">
      <Card title="Our Dramer"/>
      <Card title="Our Singer"/>
      <Card title="Our Manger"/>
      </div>
      <ContactUs/>

      
    </div>
  );
}

export default App;
