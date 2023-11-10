import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed, watchEffect } from "vue";

export const useNotesStore = defineStore("useNotesStore", () => {
  const notes = ref([]);
  const searchInput = ref("");
  const checkedNote = ref([]);
  const editingNoteId = ref(null);

  watchEffect(() => {
    const checkedNotesFromLocalStorage = JSON.parse(
      localStorage.getItem("checkedNotes") || "[]"
    );
    checkedNote.value = checkedNotesFromLocalStorage;
  });

  const listNotes = computed(() => notes.value);
  const loadindNotes = computed(() => notes.value.length <= 0);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}`);
      // console.log("fetching data from server", response.data);
      // เรียงnoteตามเวลาที่โพสล่าสุด
      notes.value = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      //เปลี่ยนเวลาเป็นlocal time
      notes.value.forEach((note) => {
        note.createdAt = new Date(note.createdAt).toLocaleString();
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const getNoteById = (noteId) => {
    return notes.value.find((note) => note.id === noteId);
  };

  const addNote = async (newNote) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API}`, newNote);
      console.log("added note", response.data);
      fetchNotes();
    } catch (error) {
      console.log("add note error", error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}/${noteId}`);
      console.log("deleted note by ID succesfully", noteId);
      fetchNotes();
    } catch (error) {
      console.log("delete note error", error);
    }
  };

  const updateNote = async (noteId, updateNote) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API}/${noteId}`,
        updateNote
      );
      console.log("updated note successfully", noteId, response.data);
      fetchNotes();
    } catch (error) {
      console.log("update note error", error);
    }
  };

  const noteMatchingSearch = computed(() => {
    if (searchInput.value.length < 1) return notes.value;
    return notes.value.filter((note) => {
      const searchLower = searchInput.value.toLowerCase();
      const titleLower = note.title.toLowerCase();
      const categoryLower = note.category.toLowerCase();
      return (
        titleLower.includes(searchLower) ||
        categoryLower.includes(searchLower) ||
        (titleLower.includes(searchLower) &&
          titleLower.indexOf(searchLower) > 0) ||
        (categoryLower.includes(searchLower) &&
          categoryLower.indexOf(searchLower) > 0)
      );
    });
  });

  const startEditingNote = (noteId) => {
    editingNoteId.value = noteId;
  };

  const cancelEditingNote = () => {
    return (editingNoteId.value = null);
  };

  const isEditingNote = computed(() => {
    return editingNoteId.value !== null;
  });

  watchEffect(() => {
    localStorage.setItem("checkedNotes", JSON.stringify(checkedNote.value));
  });

  return {
    fetchNotes,
    addNote,
    deleteNote,
    getNoteById,
    updateNote,
    listNotes,
    loadindNotes,
    noteMatchingSearch,
    searchInput,
    checkedNote,
    startEditingNote,
    cancelEditingNote,
    isEditingNote,
    editingNoteId,
  };
});
