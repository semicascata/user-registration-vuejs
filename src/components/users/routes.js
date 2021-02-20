export default [
  {
    path: "/users",
    name: "Users",
    component: () => import(/* webpackChunkName: "home" */ "./views/Users"),
  },
  {
    path: "/users/:id",
    name: "User",
    component: () => import(/* webpackChunkName: "contact" */ "./views/User"),
    props: true,
  },
];
