import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import ShoppingNotes from "./pages/ShoppingNotes";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import CartRoot from "./pages/CartRoot";
import ProfileRoot from "./pages/ProfileRoot";
import LoginForm from "./pages/LoginForm";
import Error from "./pages/Error";

const cartItems = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    size: "US 10",
    price: 129,
    quantity: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    size: "US 9",
    price: 179,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Puma Calibrate Runner",
    size: "US 8",
    price: 89,
    quantity: 3,
    image: "https://via.placeholder.com/150",
  },
];

const PRODUCTS = [
  {
    title: "p1",
    price: 100,
  },
  {
    title: "p2",
    price: 200,
  },
  {
    title: "p3",
    price: 300,
  },
  {
    title: "p4",
    price: 400,
  },
  {
    title: "p5",
    price: 500,
  },
  {
    title: "p6",
    price: 600,
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home dummyProduct={PRODUCTS} />,
        },
        {
          path: "/products",
          element: <Products dummyProduct={PRODUCTS} />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/notes",
          element: <ShoppingNotes />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/profileRoot",
          element: <ProfileRoot />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
    {
      path: "/cartRoot",
      element: <CartRoot />,
      children: [
        {
          path: "",
          element: <Cart items={cartItems} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
