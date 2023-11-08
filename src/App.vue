<script setup>
import navbar from "./components/navbar.vue";
import { onMounted } from "vue";
import { useNotesStore } from "./stores/notes";

const notesStore = useNotesStore();
onMounted(() => notesStore.fetchNotes());
</script>

<template>
  <navbar />
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
