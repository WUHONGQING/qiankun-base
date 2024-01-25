import { useRoutes } from "react-router-dom";

// Pages
import Home from "../views/home";

const App = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

export default App;
