import { createRouter, createWebHistory } from "vue-router";

import note from "../views/note.vue";
import allnotes from "../views/allnotes.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "note",
      component: note,
    },
    {
      path: "/allnotes",
      name: "allnotes",
      component: allnotes,
    },
  ],
});

export default router;
