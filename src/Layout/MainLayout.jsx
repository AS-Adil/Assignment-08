import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <div className="flex-1 ">
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
