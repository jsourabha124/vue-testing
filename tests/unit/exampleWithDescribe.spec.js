import { mount } from "@vue/test-utils";

const App = {
  props: {
    count: {
      type: Number,
    },
  },
  template: `
  <div>Hello</div>

  <div>count : {{ count }}</div>

  <div v-if="count%2 === 0">count : {{ count }}. Count is even number</div>
  <div v-else>count : {{ count }}. Count is odd number</div>
  `,
};

//common wrapper function
function factory(props) {
  return mount(App, {
    props,
  });
}

describe("App-Testing", () => {
  it("render count when even", () => {
    const wrapper = factory({ count: 2 });
    expect(wrapper.html()).toContain("Count is even number");
  });

  it("render count when odd", () => {
    const wrapper = factory({ count: 1 });
    expect(wrapper.html()).toContain("Count is odd number");
  });
});
