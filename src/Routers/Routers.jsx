import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
      ]
    },
  ]);


  export default router;