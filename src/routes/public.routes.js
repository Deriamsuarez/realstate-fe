import {
  Login,
  Register,
  ConfirmEmail,
  ForgotPassword,
  ResetPassword,
  Home,
  NotFound
} from "@/pages";

const routes = [
  { path: "/login", view: Login, alwaysVisible: false },
  { path: "/register", view: Register, alwaysVisible: false },
  { path: "/reset-password/:token", view: ResetPassword, alwaysVisible: false },
  { path: "/forgot-password", view: ForgotPassword, alwaysVisible: false },
  { path: "/confirm-email", view: ConfirmEmail, alwaysVisible: false },
  { path: "/", view: Home, alwaysVisible: true },
  { path: "*", view: NotFound, alwaysVisible: true },
];

export default routes;
