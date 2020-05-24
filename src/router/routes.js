import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Device Sniffer",
        component: Dashboard
      },
      {
        path: "icons",
        name: "Sensor Sniffer",
        component: Icons
      },
      {
        path: "maps",
        name: "Package Sniffer",
        component: Maps
      },
      {
        path: "notifications",
        name: "Gesture Sniffer",
        component: Notifications
      },
      {
        path: "profile",
        name: "Gourp Introduction",
        component: Profile
      },
      {
        path: "typography",
        name: "Contact Us",
        component: Typography
      },
      // {
      //   path: "table-list",
      //   name: "table-list",
      //   component: TableList
      // }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
