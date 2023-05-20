import React from "react";
import Navigation from "./Components/Navigation";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <Navigation />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
