import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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

const routes = createRoutesFromElements(
  <>
    <Route
      path="/"
      element={
        <ProtectedRouter>
          <NavBar />
          <Home />
        </ProtectedRouter>
      }
    />
    <Route
      path="/dc"
      element={
        <ProtectedRouter>
          <NavBar />
          <DcScreen />
        </ProtectedRouter>
      }
    />
    <Route
      path="/marvel"
      element={
        <ProtectedRouter>
          <NavBar />
          <MarvelScreen />
        </ProtectedRouter>
      }
    />
    <Route
      path="/search"
      element={
        <ProtectedRouter>
          <NavBar />
          <SearchScreen />
        </ProtectedRouter>
      }
    />
    <Route
      path="/hero/:heroeId"
      element={
        <ProtectedRouter>
          <NavBar />
          <HeroScreen />
        </ProtectedRouter>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/registerUser" element={<RegisterUser />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const router = createBrowserRouter(routes, {
  basename: "/Commics",
});

const AppRouters = () => {
  return <RouterProvider router={router} />;
};

export default AppRouters;
