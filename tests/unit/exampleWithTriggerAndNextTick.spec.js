import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
const App = {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
  template: `
  <button @click="increment"></button>

  <div v-if="count%2 === 0">count : {{ count }}. Count is even number</div>
  <div v-else>count : {{ count }}. Count is odd number</div>
  `,
};

//common warpper function
function Factory({ data } = { data: {} }) {
  return mount(App, {
    data() {
      return data;
    },
  });
}

describe("App-Testing", () => {
  it("render when count is odd", async () => {
    const wrapper = Factory();
    //farme-1
    wrapper.find("button").trigger("click");
    //add await nextTick() b/w two frames
    await nextTick(); //wait for the update of DOM
    // farme-2
    expect(wrapper.html()).toContain("Count is odd numbe");
  });

  //Refactor of above code
  it("render when count is even", async () => {
    const wrapper = Factory();
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count is even numbe");
  });
});
