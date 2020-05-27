import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Sensorboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/SensorDash.vue");
const PackageDash = () => import(/* webpackChunkName: "common" */ "@/pages/PackageDash.vue");
const GestureDash = () => import(/* webpackChunkName: "common" */"@/pages/GestureDash.vue");
const GroupIntro = () => import(/* webpackChunkName: "common" */ "@/pages/GroupIntro.vue");
const ContactList = () => import(/* webpackChunkName: "common" */ "@/pages/ContactList.vue");
// const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
// const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Device Sniffer",
        component: Dashboard,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "sensorboard",
        name: "Sensor Sniffer",
        component: Sensorboard,
        meta: {
          keepAlive: true
        }
      },      
      {
        path: "packageboard",
        name: "Package Sniffer",
        component: PackageDash,
        meta: {
          keepAlive: true
        }
      }, 
      {
        path: "gestureboard",
        name: "Gesture Sniffer",
        component: GestureDash,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "groupintro",
        name: "Group Introduction",
        component: GroupIntro,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "contact",
        name: "Contact Us",
        component: ContactList,
        meta: {
          keepAlive: true
        }
      },
      // {
      //   path: "profile",
      //   name: "Gourp Introduction",
      //   component: Profile,
      //   meta: {
      //     keepAlive: true
      //   }
      // },
      // {
      //   path: "typography",
      //   name: "Contact Us",
      //   component: Typography,
      //   meta: {
      //     keepAlive: true
      //   }
      // },
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
