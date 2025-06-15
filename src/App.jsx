import { createBrowserRouter, createRoutesFromElements, Outlet, Route ,RouterProvider } from "react-router-dom";
import Background from "./components/Background/Background";
import Home from "./components/home/Home";
import Heder from "./components/home/Heder";
import Products from "./components/products/Products";
import NoPageFound from "./components/404/NopageFaound";
import Footer from "./components/home/Footer";
import { Scroll } from "./components/home/Scroll";
import { Reviews } from "./components/review/Review";
import Contact from "./components/contact/Contact";
import { useContext } from "react";
import { AuthContext } from "./context/authContecxt";
import Dashbord from "./components/admin/dashbord/dash";
import Login from "./components/admin/login/login";
import UploadNewProject from "./components/admin/upload_products/uploadNewProject";


const AdminLayout = () => {
  return (
    <>
      <Scroll />
      <Outlet />
      <Footer />
    </>
  );
};

function Layout(){
  return(
    <>
      <Scroll/>
      <Heder/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}


function App() {

  const {session , loading} = useContext(AuthContext);



  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPageFound />}></Route>
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={session ? <Dashbord /> : <Login />} />
          <Route
            path="addproducts"
            element={session ? <UploadNewProject /> : <Login />}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <Background>
        <RouterProvider router={Router} />
      </Background>
    </>
  );
}

export default App;
