<template>
  <div
    class="bg-Orange-500 w-screen h-screen pt-[8rem] flex flex-col items-center max-md:pt-[4rem]"
  >
    <div
      class="border-Orange-200 border rounded-xl bg-Orange-400 w-[25rem] h-[22rem] px-[2rem] pt-[1.3rem] pb-[0.5rem] mt-[5rem] flex flex-col max-sm:scale-90"
    >
      <label class="text-Orange-100 font-bold">title:</label>
      <input
        class="bg-Orange-500 rounded-lg text-Orange-100 font-semibold focus:outline-none p-[0.2rem] mb-[0.4rem]"
        type="text"
        placeholder="create your note..."
        v-model="editedNote.title"
      />
      <label class="text-Orange-100 font-bold">Description:</label>
      <textarea
        class="bg-Orange-500 rounded-lg resize-none h-[8rem] text-Orange-100 font-semibold focus:outline-none p-[0.2rem] mb-[0.4rem]"
        placeholder="create your detail..."
        v-model="editedNote.description"
      />
      <label class="text-Orange-100 font-bold">Category:</label>
      <input
        class="bg-Orange-500 rounded-lg text-Orange-100 font-semibold focus:outline-none p-[0.2rem]"
        type="text"
        placeholder="create your category..."
        v-model="editedNote.category"
      />
      <div class="flex justify-center">
        <button
          class="bg-Yellow-100 text-Orange-500 border border-Yellow-100 px-[0.5rem] py-[0.3rem] mt-[1rem] mr-[1rem] rounded-lg hover:bg-Orange-500 hover:text-Yellow-100"
          @click="cancelEditingNote"
        >
          Cancel
        </button>
        <button
          class="px-[0.5rem] py-[0.3rem] border border-Orange-100 bg-Orange-100 text-Orange-500 rounded-lg mt-[1rem] hover:border-Orange-100 hover:border hover:bg-Orange-500 hover:text-Orange-100"
          @click="saveEditingNote"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onBeforeMount, onBeforeUpdate } from "vue";
import { useNotesStore } from "../stores/notes";
import router from "../router";

const note_store = useNotesStore();
const editedNote = ref({ title: "", description: "", category: "" });

const cancelEditingNote = () => {
  note_store.cancelEditingNote();
  router.push({ name: "allnotes" });
};

const saveEditingNote = () => {
  note_store.updateNote(note_store.editingNoteId, editedNote.value);
  note_store.cancelEditingNote();
  router.push({ name: "allnotes" });
};

onBeforeMount(() => {
  const noteId = router.currentRoute.value.params.id;
  note_store.startEditingNote(noteId);
  note_store.fetchNotes(); // ทำการ fetchNotes เพื่อให้มีข้อมูลเก่ามา
});

onBeforeUpdate(() => {
  const noteId = router.currentRoute.value.params.id;
  note_store.startEditingNote(noteId);
});

watchEffect(() => {
  const noteToEdit = note_store.getNoteById(note_store.editingNoteId);
  if (noteToEdit) {
    editedNote.value.title = noteToEdit.title || "";
    editedNote.value.description = noteToEdit.description || "";
    editedNote.value.category = noteToEdit.category || "";
    editedNote.value.createdAt = new Date(noteToEdit.createdAt) || null;
  }
});
</script>

<style lang="scss" scoped></style>
