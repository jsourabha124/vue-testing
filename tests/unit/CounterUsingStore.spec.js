import { mount } from "@vue/test-utils";
import CounterUsingStore from "@/components/CounterUsingStore.vue";
import { createStore } from "vuex";

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0,
      };
    },
    mutations: {
      increment(state) {
        state.count += 1;
      },
    },
  });
};

function Factory() {
  //when we use store. Reset the store value after each test case.
  //Otherwise it will keep on increse the value after running each test case.
  const store = createVuexStore();
  return mount(CounterUsingStore, {
    global: {
      plugins: [store],
    },
  });
}

describe("CounterUsingStore unit testing", () => {
  it("render when count is odd", async () => {
    const wrapper = Factory();
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count is odd numbe");
  });

  it("render when count is even", async () => {
    const wrapper = Factory();
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count is even numbe");
  });
});
