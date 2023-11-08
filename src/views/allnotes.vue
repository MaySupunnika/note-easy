<template>
  <div class="bg-Orange-500 pt-[9rem] px-[4rem]">
    <h1 class="text-Orange-100 text-5xl font-extrabold text-center mb-[3rem]">
      All Notes
    </h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="note in list" :key="note.id">
        <div
          class="border-Orange-200 border rounded-xl bg-Orange-400 w-[18rem] h-auto p-[1rem]"
        >
          <h3 class="text-Orange-100 text-lg font-bold">{{ note.title }}</h3>
          <p class="text-Orange-100 font-semibold mt-[0.5rem]">
            {{ note.description }}
          </p>
          <p class="text-Orange-100 font-semibold mt-[0.3rem]">
            category: <span class="underline">{{ note.category }}</span>
          </p>
          <p class="text-Orange-100 text-sm font-semibold mt-[0.3rem]">
            created at: {{ note.createdAt }}
          </p>
          <div class="flex justify-center">
            <button
              class="px-[0.5rem] py-[0.3rem] border border-Orange-100 bg-Orange-100 text-Orange-500 rounded-lg mt-[1rem] hover:border-Orange-100 hover:border hover:bg-Orange-500 hover:text-Orange-100"
            >
              Delete Note
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNotesStore } from "../stores/notes";
const notes_store = useNotesStore();
const list = computed(() => notes_store.listNotes);
</script>

<style lang="scss" scoped></style>
