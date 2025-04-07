<template>
  <div>
    <table class="w-full">
      <thead>
        <tr class="text-left">
          <th class="px-3 border-b-2 border-gray-300">Title</th>
          <th class="px-3 border-b-2 border-gray-300">Category</th>
          <th class="px-3 border-b-2 border-gray-300">Company</th>
          <th class="px-3 border-b-2 border-gray-300">Description</th>
          <th class="px-3 border-b-2 border-gray-300">Location</th>
          <th class="px-3 border-b-2 border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.title }}</td>
          <td>{{ job.category }}</td>
          <td>{{ job.company }}</td>
          <td>{{ job.description }}</td>
          <td>{{ job.location }}</td>
          <td>
            <a
              class="cursor-pointer text-blue-700 hover:text-blue-950"
              @click="openDetials(job)"
              >Details</a
            >
          </td>
        </tr>
        <tr v-if="loading">
          <td colspan="5">Loading...</td>
        </tr>
      </tbody>
    </table>
    <JobPaginate
      :page="params.page"
      :pageSize="params.pageSize"
      :count="count"
      @paginate="paginate"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted, defineProps, watch, ref } from "vue";
import { useRouter } from "vue-router";
import JobModel from "@/models/job.model";
import JobPaginate from "@/components/JobPaginate.vue";
import JobRequestParams from "@/models/job.request.params";

const router = useRouter();
const store = useStore();
const params = ref<JobRequestParams>({
  page: 1,
  pageSize: 10,
  query: "",
});

const jobs = computed(() => store.state.jobs);
const count = computed(() => store.state.jobCount);
const loading = computed(() => store.state.loading);

const props = defineProps<{
  criterial: string;
}>();

const openDetials = (job: JobModel) => {
  router.push(`/jobs/${job.id}`);
};

watch(
  () => props.criterial,
  (value: string) => {
    params.value.query = value;
    load();
  }
);

const load = () => {
  store.dispatch("fetchJobs", params.value);
};

const paginate = (page: number, pageSize: number) => {
  params.value.page = page;
  params.value.pageSize = pageSize;
  load();
};

onMounted(async () => {
  params.value.query = props.criterial;
  load();
});
</script>
