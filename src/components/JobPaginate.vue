<template>
  <div className="flex justify-between gap-4">
    <div>Showing {{ showFrom }} to {{ showTo }} of {{ count }} rows</div>
    <div className="flex gap-4 text-blue-600">
      <span
        :class="{
          'text-blue-300': currentPage == firstPage,
          'cursor-default': currentPage == firstPage,
          'hover:text-blue-300 ': currentPage !== firstPage,
          'cursor-pointer': currentPage !== firstPage,
        }"
        @click="pageChange(firstPage)"
      >
        {{ "<<" }}
      </span>
      <span
        v-for="page in lastPage"
        :key="page"
        :class="{
          'text-blue-300': currentPage == page,
          'cursor-default': currentPage == page,
          'hover:text-blue-300 ': currentPage !== page,
          'cursor-pointer': currentPage !== page,
        }"
        @click="pageChange(page)"
      >
        {{ page }}
      </span>
      <span
        :class="{
          'text-blue-300': currentPage == lastPage,
          'cursor-default': currentPage == lastPage,
          'hover:text-blue-300 ': currentPage !== lastPage,
          'cursor-pointer': currentPage !== lastPage,
        }"
        @click="pageChange(lastPage)"
      >
        {{ ">>" }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, watch } from "vue";

const currentPage = ref<number>(1);
const lastPage = ref<number>(1);
const showFrom = ref<number>(1);
const showTo = ref<number>(1);
const firstPage = 1;

const props = defineProps<{
  page: number;
  pageSize: number;
  count: number;
}>();

const emits = defineEmits<{
  (e: "paginate", page: number, pageSize: number): void;
}>();

watch(
  () => props.count,
  () => {
    load();
  }
);

const pageChange = (p: number) => {
  currentPage.value = p;
  showFrom.value = (currentPage.value - 1) * props.pageSize + 1;
  showTo.value = showFrom.value + props.pageSize - 1;
  emits("paginate", p, props.pageSize);
};

const load = () => {
  currentPage.value = props.page;
  lastPage.value = Math.ceil(props.count / props.pageSize);
  showFrom.value = (currentPage.value - 1) * props.pageSize + 1;
  showTo.value = showFrom.value + props.pageSize - 1;
};

onMounted(() => {
  load();
});
</script>
