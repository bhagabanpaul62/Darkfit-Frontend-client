import { createBrowserRouter, createRoutesFromElements, Outlet, Route ,RouterProvider } from "react-router-dom";
import Background from "./components/Background/Background";
import Home from "./components/home/Home";
import Heder from "./components/home/Heder";

function Layout(){
  return(
    <>
      <Heder/>
      <Outlet/>
      
    </>
  )
}


function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        

      </Route>
    )
  )

  return (
    <>
      <Background>
        <RouterProvider router={Router} />
      </Background>
    </>
  );
}

export default App;
