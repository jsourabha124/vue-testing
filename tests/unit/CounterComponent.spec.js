import { mount } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";

function Factory({ data } = { data: {} }) {
  return mount(CounterComponent, {
    data() {
      return data;
    },
  });
}

describe("CounterComponent unit testing", () => {
  it("render when count is even", async () => {
    const wrapper = Factory();
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count is even numbe");
  });
});
