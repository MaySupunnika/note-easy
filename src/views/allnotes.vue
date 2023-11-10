<template>
  <div class="flex justify-center pt-[21rem]" v-if="note_store.loadindNotes">
    <h1 class="text-Orange-100 text-xl font-semibold">Loading...</h1>
  </div>
  <div class="bg-Orange-500 pt-[9rem] px-[4rem] max-sm:pt-[12rem]" v-else>
    <h1
      class="text-Orange-100 text-5xl font-extrabold text-center mb-[3rem] max-sm:text-3xl max-sm:mb-0 max-md:text-3xl"
    >
      All Notes
    </h1>
    <div
      class="flex flex-wrap gap-4 pb-[11rem] pt-[3rem] max-sm:justify-center"
    >
      <div v-for="note in search_note" :key="note.id">
        <div
          class="border-Orange-200 border rounded-xl bg-Orange-400 w-[18rem] h-auto p-[1rem]"
        >
          <div class="flex">
            <input
              type="checkbox"
              :checked="note_store.checkedNote.includes(note.id)"
              @change="handlerCheckNote(note)"
            />
            <h3 class="text-Orange-100 text-lg font-bold ml-[0.5rem]">
              {{ note.title }}
            </h3>
          </div>
          <p class="text-Orange-100 font-semibold mt-[0.5rem]">
            {{ note.description }}
          </p>
          <p class="text-Orange-100 font-semibold mt-[0.3rem]">
            category: <span class="underline">{{ note.category }}</span>
          </p>
          <div class="flex justify-center">
            <button
              class="bg-Orange-200 text-Orange-500 border border-Orange-200 rounded-lg hover:bg-Orange-500 hover:text-Orange-200 px-[0.5rem] py-[0.3rem] mt-[1rem] mr-[1rem]"
            >
              <router-link :to="{ name: 'editnote', params: { id: note.id } }"
                >Edit</router-link
              >
            </button>
            <button
              class="px-[0.5rem] py-[0.3rem] border border-Orange-100 bg-Orange-100 text-Orange-500 rounded-lg mt-[1rem] hover:border-Orange-100 hover:border hover:bg-Orange-500 hover:text-Orange-100"
              @click="handlerDeleteNote(note.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNotesStore } from "../stores/notes";

const note_store = useNotesStore();
const list = computed(() => note_store.listNotes);
const search_note = computed(() => note_store.noteMatchingSearch);

const handlerDeleteNote = (noteId) => {
  note_store.deleteNote(noteId);
};

const handlerCheckNote = (note) => {
  if (note_store.checkedNote.includes(note.id)) {
    note_store.checkedNote = note_store.checkedNote.filter(
      (id) => id !== note.id
    );
  } else {
    note_store.checkedNote = [...note_store.checkedNote, note.id];
  }
};
</script>

<style lang="scss" scoped></style>
