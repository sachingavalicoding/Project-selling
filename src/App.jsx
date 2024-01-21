import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProjects, Contact, Home, Profile, Projects, Signin, Signup } from "./pages/index";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addprojects" element={<AddProjects />} />
        <Route path="/projects" element={<Projects />} />

        {/*  auth */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App