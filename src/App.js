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
import { auth } from "./components/FirebaseConfig";
import { useEffect, useState } from "react";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";

const PRODUCTS = [
  { id: 1, title: "p1", price: 100 },
  { id: 2, title: "p2", price: 200 },
  { id: 3, title: "p3", price: 300 },
  { id: 4, title: "p4", price: 400 },
  { id: 5, title: "p5", price: 500 },
  { id: 6, title: "p6", price: 600 },
];

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        console.log("成功設定持久性");
      })
      .catch((error) => {
        console.log("設定持久性失敗", error);
      });
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} setUser={setUser} />,
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
          element: <ProfileRoot user={user} setUser={setUser} />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/cartRoot",
          element: <CartRoot />,
          children: [
            {
              path: "",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
