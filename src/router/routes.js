import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/postagens", component: HomeView },
  { path: "/topicos", component: HomeView },
  { path: "/sobre", component: HomeView },
  //   { path: "/home", component: HomeView },
  //   { path: "/about", component: AboutView },
  { path: "/login", component: () => import("../views/LoginView.vue") },
];
export default routes;
