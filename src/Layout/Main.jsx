import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navebar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Main;
