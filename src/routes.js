import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import CriarProjeto from "views/CriarProjeto.jsx";
import Relatorios from "views/Relatorios.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/projeto",
    name: "Projetos",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/criar-projeto",
    name: "Criar Projeto",
    icon: "pe-7s-news-paper",
    component: CriarProjeto,
    layout: "/admin"
  },
  {
    path: "/relatorios",
    name: "Relatórios",
    icon: "pe-7s-graph2",
    component: Relatorios,
    layout: "/admin"
  }
];

export default dashboardRoutes;
