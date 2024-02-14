import { Dashboard, Users, Properties, Settings } from "@/pages";
import {
  Cog6ToothIcon,
  HomeIcon,
  HomeModernIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const routes = [
  {name: "Dashboard", path: "/dashboard", view: Dashboard, icon: HomeIcon },
  { path: "/users", view: Users, name: "Users", icon: UsersIcon },
  { path: "/properties", view: Properties, name: "Properties", icon: HomeModernIcon },
  { path: "/Settings", view: Settings, name: "Settings", icon: Cog6ToothIcon },
];

export default routes;
