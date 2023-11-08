<template>
  <nav
    class="h-[4rem] bg-Orange-300 text-Orange-100 flex justify-between fixed w-screen"
  >
    <div class="flex gap-6 items-center ml-6">
      <h2 class="text-3xl font-black cursor-pointer hover:text-Orange-500">
        <router-link to="/">Easy Notes</router-link>
      </h2>
      <h4
        class="font-extrabold text-xl ml-[3rem] cursor-pointer hover:text-Orange-500"
      >
        <router-link to="/">Home</router-link>
      </h4>
      <h4
        class="font-extrabold text-xl ml-[1.5rem] cursor-pointer hover:text-Orange-500"
      >
        <router-link to="/allnotes">All Notes</router-link>
      </h4>
    </div>

    <div class="flex items-center w-[18rem]">
      <div class="w-[2rem] h-[2rem]">
        <img
          class="absolute top-6 right-[16rem]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArBJREFUSEu1ldtvTFEUh791plqZoAlRtJ2mpqc01CUk4gEJEoLEq1uUM9WUBA8kHjx5Il6IIDShx7hE4g+QPjVRQTxURSIuc6Yxc6qJWzVE6eicJUcRejkziXa97r1/3/rttdfawjiHjLM+owLi0dIKzyjYBroRWPQrkQ5Ebw+o3mxwXnflk9wwwHXTnJKh/5rA5gABBW5l+rKxxu7uviDQP4Cm0tJwUTj0UKEW6FfVJgzjTCyR7vRFmqsroqJ6CGgACoGHmeKSlY3t7d9Hg/wDsM3yqyA7ATckxvq6ROrZSAfjs8sXeoa0IMwCTlmOezgnwI6WL8CQJwIDgrFsl5PqCLJ+pTqySpU7QMYLMbv+hds90v4/Dq6YkbMK+wXO7XbcA/kU0DYjN4DtihyNOekTuQAJBVOQ2t1O+mk+gHhV2WpPjFaUu1bSXRUIsM3IFyCcctzQMfDyAVyaXz411C8fgB7LcaflAFR8Ap0cCmcm1T1548Nyxvl50yeFMxM/A+8sxy3J5eCx31CKsTTmpB7lVAdss2w5GA9AWy2na20goLmq4qSIHkG5aCXdffkAms1IXKAOkbNWIn0wEBCPls3xDOO5QDafZ2rPiazEo80XDXI9pNEil4EYaMrwdN2uztcvR8rKri5bjBotwAyUJivp7s3ZaP6GIaPim8AFT7OnY8lu11//6VKMQyLUKxQMZi8PNNS3vv7Fe7/Yw2LYsGuKRosLJXMDkU0BdehF9DgqW4ElinbIQMEa69Wr3qFnRh3Xdk1lJQPZ7SJsUGUh8FXhEcL9on45vyOd/virD1oHx7k8zhZ5a/c87er5G/LfH84ghHsgNUAipIUr6pLJt78h/w3wha5WVZVk+d6G6Fyg3nLc5jEF+GJ2ZeVMJnhbrET6zJheUa6GHJMrCoKMO+AHp2gAKCPQlEoAAAAASUVORK5CYII="
        />
        <input
          class="border-Orange-100 border rounded-full w-[14rem] h-[2.3rem] pl-[2rem] pr-[1rem] focus:outline-none bg-Orange-500"
          type="search"
          placeholder="serch your note..."
        />
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
