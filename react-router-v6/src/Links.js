import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Links = () => {
  let element = useRoutes(routes);
  return element;
};

export default Links;
