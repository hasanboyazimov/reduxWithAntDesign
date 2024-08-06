//pages
import Home from "./pages/Home";
import About from "./pages/About";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

//layout
import MainLayout from "./layout/MainLayout";

//react-redux
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

//pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import { isAuthReadyChange, login } from "./features/userSlice";
import { useEffect } from "react";

const App = () => {
  const { user, isAuthReady } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(isAuthReadyChange());
    });
  }, []);

  return <> {isAuthReady && <RouterProvider router={routes} />}</>;
};

export default App;
