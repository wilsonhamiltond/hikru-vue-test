<template>
  <div class="mt-4">
    <div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col gap-4 pt-4"
      >
        <div class="flex justify-between px-3 py-2">
          <b>Name:</b>

          <input
            type="tesxt"
            placeholder=""
            :value="candidate.name"
            @keyup="candidate.name = ($event.target as HTMLInputElement).value"
            class="border-2 border-black rounded-md p-2"
          />
        </div>
        <div class="flex justify-between px-3 py-2">
          <b>Email:</b>

          <input
            type="email"
            placeholder=""
            :value="candidate.email"
            @keyup="candidate.email = ($event.target as HTMLInputElement).value"
            class="border-2 border-black rounded-md p-2"
          />
        </div>
        <div class="flex justify-between px-3 py-2">
          <b>Location:</b>

          <input
            type="text"
            :value="candidate.location"
            @keyup="
              candidate.location = ($event.target as HTMLInputElement).value
            "
            class="border-2 border-black rounded-md p-2"
          />
        </div>
        <div
          class="w-full flex items-center justify-center content-center mb-5"
        >
          <button
            @click="apply"
            class="text-white rounded-md bg-blue-800 hover:bg-blue-500 px-5 py-3 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CandidateModel from "@/models/candidate.model";
import { ref } from "vue";

const candidate = ref<CandidateModel>({
  name: "",
  location: "",
  email: "",
});

const apply = () => {
  console.log("Candidate Info: ", candidate.value);
  return candidate.value;
};
</script>
