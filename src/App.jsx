//pages
import Home from "./pages/Home";
import About from "./pages/About";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

//layout
import MainLayout from "./layout/MainLayout";

const App = () => {
  const user = false;

  const routes = createBrowerRouter([
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
      element: user ? <Navigate to="/" /> : <h1>Login</h1>,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <h1>Register</h1>,
    },
  ]);
};

export default App