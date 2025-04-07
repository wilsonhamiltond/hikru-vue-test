import { shallowMount } from "@vue/test-utils";
import JobTable from "@/components/JobTable.vue";
import { createStore } from "vuex";

describe("JobTable.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    const mockStore = createStore({
      state: {
        jobCount: 1,
        jobs: [
          {
            id: 4,
            title: "Front end",
            location: "RD",
          },
        ],
      },
      actions: {
        fetchJobs: jest.fn,
      },
      mutations: {},
    });
    wrapper = shallowMount(JobTable, {
      global: {
        plugins: [mockStore],
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
