import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import JobsView from "@/views/JobsView/JobsView.vue";
import JobDetailsView from "@/views/JobDetailsView/JobDetailsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "jobs",
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:id",
    name: "jobsDetails",
    component: JobDetailsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
