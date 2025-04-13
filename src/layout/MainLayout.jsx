import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/Hero";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
