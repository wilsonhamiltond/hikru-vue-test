<template>
  <div>
    <div>
      <div v-if="loading">Loading</div>
      <div v-if="job" class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ job.title }}</div>
          <p class="text-gray-700 text-base">
            Category:
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ job.category }}
            </span>
          </p>
          <p class="text-gray-700 text-base">
            Company:
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ job.company }}</span
            >
          </p>
          <p class="text-gray-700 text-base">{{ job.description }}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            v-for="(location, key) in job.location.split(',')"
            :key="key"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ location }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, defineProps, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const job = computed(() => store.state.job);
const loading = computed(() => store.state.loading);

const props = defineProps<{
  id: number | undefined;
}>();

const loadJobDetails = (id: number) => {
  store.dispatch("getJobById", props.id);
};
watch(
  () => props.id,
  (value: number | undefined) => {
    if (value) {
      loadJobDetails(value);
    }
  }
);

onMounted(() => {
  loadJobDetails(props.id as number);
});
</script>
