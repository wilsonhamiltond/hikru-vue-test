import { shallowMount } from "@vue/test-utils";
import JobCard from "@/components/JobCard.vue";
import { createStore } from "vuex";

describe("JobCard.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    const mockStore = createStore({
      state: {
        job: {
          id: 4,
          title: "Front end",
          location: "RD"
        },
      },
      actions: {},
      mutations: {},
    });
    wrapper = shallowMount(JobCard, {
      propsData: {
        id: 4,
      },
      global: {
        plugins: [mockStore],
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
