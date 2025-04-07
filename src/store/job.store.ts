// src/store/index.ts (using TypeScript)
import JobModel from "@/models/job.model";
import JobRequestParams from "@/models/job.request.params";
import paginate from "@/utils/paginate";
import { createStore } from "vuex";

interface JobState {
  jobs: JobModel[];
  job?: JobModel;
  loading: boolean;
  error: string | null;
  jobCount: number;
}

const apiFileName =
  "https://raw.githubusercontent.com/wilsonhamiltond/hikru-vue-test/refs/heads/main/public/data/api.json";

export default createStore<JobState>({
  state: {
    jobs: [] as JobModel[],
    jobCount: 0 as number,
    job: undefined,
    loading: false,
    error: null,
  },
  mutations: {
    setJobsCount(state, count: number) {
      state.jobCount = count;
      state.loading = false;
      state.error = null;
    },
    setJobs(state, data: JobModel[]) {
      state.jobs = data;
      state.loading = false;
      state.error = null;
    },
    setJob(state, data: JobModel) {
      state.job = data;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.jobCount = 0;
      state.error = null;
    },
    setError(state, error) {
      state.loading = false;
      state.error = error;
      state.jobs = [] as JobModel[];
      state.jobCount = 0;
      state.job = undefined;
    },
  },
  actions: {
    async fetchJobs({ commit }, params: JobRequestParams) {
      commit("setLoading");
      try {
        const response = await fetch(apiFileName);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        if (params.query) {
          data = data.filter((job: JobModel) => {
            const title = job.title.toLocaleLowerCase();
            return title.includes(params.query.toLocaleLowerCase());
          });
        }
        commit("setJobsCount", data.length);
        data = paginate(data, params.page, params.pageSize);
        commit("setJobs", data);
      } catch (error: any) {
        commit("setError", error.message);
      }
    },
    async getJobById({ commit }, id: number) {
      commit("setLoading");
      try {
        const response = await fetch(apiFileName);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jobs: JobModel[] = await response.json();
        const job = jobs.find((j) => j.id == id);
        if (!job) {
          throw new Error(`Job not found: ${id}`);
        }
        commit("setJob", job);
      } catch (error: any) {
        commit("setError", error.message);
      }
    },
  },
  getters: {
    getJobs: (state) => state.jobs,
    getJob: (state) => state.job,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
});
