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
        v-model="title"
      />
      <label class="text-Orange-100 font-bold">Description:</label>
      <textarea
        class="bg-Orange-500 rounded-lg resize-none h-[8rem] text-Orange-100 font-semibold focus:outline-none p-[0.2rem] mb-[0.4rem]"
        placeholder="create your detail..."
        v-model="description"
      />
      <label class="text-Orange-100 font-bold">Category:</label>
      <input
        class="bg-Orange-500 rounded-lg text-Orange-100 font-semibold focus:outline-none p-[0.2rem]"
        type="text"
        placeholder="create your category..."
        v-model="category"
      />
      <div class="flex justify-center">
        <button
          class="bg-Yellow-100 text-Orange-500 border border-Yellow-100 px-[0.5rem] py-[0.3rem] mt-[1rem] mr-[1rem] rounded-lg hover:bg-Orange-500 hover:text-Yellow-100"
          @click="clearForm"
        >
          Clear
        </button>
        <button
          class="px-[0.5rem] py-[0.3rem] border border-Orange-100 bg-Orange-100 text-Orange-500 rounded-lg mt-[1rem] hover:border-Orange-100 hover:border hover:bg-Orange-500 hover:text-Orange-100"
          @click="submitForm"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "../stores/notes";

const note_store = useNotesStore();

const title = ref("");
const description = ref("");
const category = ref("");

const submitForm = () => {
  const newNote = {
    title: title.value,
    description: description.value,
    category: category.value,
  };
  note_store.addNote(newNote);
  clearForm();
};

const clearForm = () => {
  title.value = "";
  description.value = "";
  category.value = "";
};
</script>

<style lang="scss" scoped></style>
