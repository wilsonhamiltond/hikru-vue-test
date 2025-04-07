<template>
  <div class="w-full">
    <div class="flex flex-row gap-4 justify-between mb-3">
      <h1 class="text-3xl">Job List</h1>
      <div class="flex flex-row gap-2">
        <input
          type="search"
          placeholder="Search by title"
          :value="criterial"
          @keyup="updateCriterial"
          class="border-2 border-black rounded-md p-2"
        />
      </div>
    </div>
    <JobTable :criterial="criterial" />
  </div>
</template>

<script setup lang="ts">
import JobTable from "@/components/JobTable.vue";
import { ref } from "vue";

const criterial = ref<string>("");

const updateCriterial = (event: Event) => {
  criterial.value = (event?.target as HTMLInputElement).value;
};
</script>
