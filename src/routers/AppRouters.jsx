import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/page/Home";
import DcScreen from "../components/page/dc/DcScreen";
import MarvelScreen from "../components/page/marvel/MarvelScreen";
import SearchScreen from "../components/page/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScren";
import NavBar from "../components/ui/NavBar";
import ProtectedRouter from "../utils/ProtectedRouter";
import NotFound from "../components/notFound/NotFound";
import RegisterUser from "../components/register/RegisterUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <NavBar />
        <Home />
      </ProtectedRouter>
    ),
  },
  {
    path: "/dc",
    element: (
      <ProtectedRouter>
        <NavBar />
        <DcScreen />
      </ProtectedRouter>
    ),
  },
  {
    path: "/marvel",
    element: (
      <ProtectedRouter>
        <NavBar />
        <MarvelScreen />
      </ProtectedRouter>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRouter>
        <NavBar />
        <SearchScreen />
      </ProtectedRouter>
    ),
  },
  {
    path: "/hero/:heroeId", // Nueva ruta para detalles de héroes
    element: (
      <ProtectedRouter>
        <NavBar />
        <HeroScreen />
      </ProtectedRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registerUser",
    element: <RegisterUser />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouters = () => {
  return <RouterProvider router={router} />;
};

export default AppRouters;
