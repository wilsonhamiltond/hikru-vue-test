import { shallowMount } from "@vue/test-utils";
import JobApply from "@/components/JobApply.vue";

describe("JobApply.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(JobApply);
  });

  it("renders props.msg when passed", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("When click submit should print console and return info", () => {
    wrapper.vm.candidate = {
      name: "John",
    };
    const candidate = wrapper.vm.apply();
    expect(candidate.name).toBe("John");
  });
});
