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
  <div v-else>count : {{ count }}. count is odd number</div>
  `,
};

test("Test weather Hello text exist in template", () => {
  const wrapper = mount(App);
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("Hello");
});

test("Test by passing count value as a props", () => {
  const wrapper = mount(App, {
    props: {
      count: 1,
    },
  });
  expect(wrapper.html()).toContain("count : 1");
});

test("Test, weather count is odd number", () => {
  const wrapper = mount(App, {
    props: {
      count: 1,
    },
  });
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("count is odd number");
});

test("Test, weather count is even number", () => {
  const wrapper = mount(App, {
    props: {
      count: 2,
    },
  });
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("Count is even numbe");
});
