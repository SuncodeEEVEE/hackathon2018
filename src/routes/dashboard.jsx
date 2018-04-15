import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import MilesDriven from "views/MilesDriven/MilesDriven";
import GasSavings from "views/GasSavings/GasSavings";
import TreesSaved from "views/TreesSaved/TreesSaved";
import EmissionsReduced from "views/EmissionsReduced/EmissionsReduced";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "Vehicle Profiles",
    icon: "pe-7s-car",
    component: UserProfile
  },
  {
    path: "/milesDriven",
    name: "Miles Driven",
    titleIcon: "fa fa-arrow-left",
    icon: "pe-7s-car",
    component: MilesDriven
  },
  {
    path: "/GasSavings",
    name: "Gas Savings",
    titleIcon: "fa fa-arrow-left",
    icon: "pe-7s-paint-bucket ",
    component: GasSavings
  },
  {
    path: "/TreesSaved",
    name: "Trees Saved",
    titleIcon: "fa fa-arrow-left",
    icon: "pe-7s-sun",
    component: TreesSaved
  },
  {
    path: "/EmissionsReduced",
    name: "Emissions Reduced",
    titleIcon: "fa fa-arrow-left",
    icon: "pe-7s-cloud",
    component: EmissionsReduced
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
