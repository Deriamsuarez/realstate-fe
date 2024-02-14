import publicRoutes from "@/routes/public.routes";
import privateRoutes from "@/routes/private.routes";
import { useSelector } from "react-redux";


const routes = () => {
  const auth = useSelector((sl) => sl.auth.token);

  const filteredPublicRoutes = publicRoutes.filter(route => auth || route.alwaysVisible);

  const result = auth ? filteredPublicRoutes.concat(privateRoutes) : filteredPublicRoutes;

  return result;
};

const dashboardRoutes = () => {
return privateRoutes;
}

export {dashboardRoutes}

export default routes;