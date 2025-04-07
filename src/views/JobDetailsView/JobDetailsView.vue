<template>
  <div>
    <a
      class="cursor-pointer text-blue-700 hover:text-blue-950"
      @click="goBack()"
      >Back</a
    >
    <JobCard :id="jobId" />
    <JobApply />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import JobCard from "@/components/JobCard.vue";
import JobApply from "@/components/JobApply.vue";

const route = useRoute();
const router = useRouter();
const jobId = ref<number | undefined>();

const goBack = () => {
  router.push(`/jobs`);
};

onMounted(() => {
  jobId.value = Number(route.params.id);
});
</script>
