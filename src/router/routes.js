import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  //   { path: "/home", component: HomeView },
  //   { path: "/about", component: AboutView },
  { path: "/login", component: () => import("../views/LoginView.vue") },
];
export default routes;
