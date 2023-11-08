import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const useNotesStore = defineStore("useNotesStore", () => {
  const notes = ref([]);

  const listNotes = computed(() => notes.value);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}`);
      console.log("fetching data from server", response.data);
      notes.value = response.data;
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  return { fetchNotes, listNotes };
});
