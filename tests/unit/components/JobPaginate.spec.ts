import { shallowMount } from "@vue/test-utils";
import JobPaginate from "@/components/JobPaginate.vue";

describe("JobPaginate.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(JobPaginate, {
      propsData: {
        page: 1,
        pageSize: 10,
        count: 200,
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("When load shold set current 1", () => {
    wrapper.vm.load();
    expect(wrapper.vm.currentPage).toBe(1);
  });

  it("When click on page shold change page", () => {
    wrapper.vm.pageChange(4);
    expect(wrapper.vm.currentPage).toBe(4);
  });
});
