import { createRouter, createWebHistory } from "vue-router";

import note from "../views/note.vue";
import allnotes from "../views/allnotes.vue";
import editnote from "../views/editnote.vue";
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
    {
      path: "/editnote/:id",
      name: "editnote",
      component: editnote,
    },
  ],
});

export default router;
