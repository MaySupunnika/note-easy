<template>
  <div
    class="bg-Orange-500 w-screen h-screen pt-[8rem] flex flex-col items-center"
  >
    <div
      class="border-Orange-200 border rounded-xl bg-Orange-400 w-[25rem] h-[22rem] px-[2rem] pt-[1.3rem] pb-[0.5rem] mt-[5rem] flex flex-col"
    >
      <label class="text-Orange-100 font-bold">title:</label>
      <input
        class="text-Orange-100 font-semibold focus:outline-none"
        type="text"
        placeholder="create your note..."
      />
      <label class="text-Orange-100 font-bold">Description:</label>
      <textarea
        class="resize-none h-[8rem] text-Orange-100 font-semibold focus:outline-none"
        placeholder="create your detail..."
      />
      <label class="text-Orange-100 font-bold">Category:</label>
      <input
        class="text-Orange-100 font-semibold focus:outline-none"
        type="text"
        placeholder="create your category..."
      />
      <div class="flex justify-center">
        <button
          class="bg-Yellow-100 text-Orange-500 border border-Yellow-100 px-[0.5rem] py-[0.3rem] mt-[1rem] mr-[1.5rem] rounded-xl hover:bg-Orange-500 hover:text-Yellow-100"
        >
          Clear
        </button>
        <button
          class="px-[0.5rem] py-[0.3rem] border border-Orange-100 bg-Orange-100 text-Orange-500 rounded-lg mt-[1rem] hover:border-Orange-100 hover:border hover:bg-Orange-500 hover:text-Orange-100"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
