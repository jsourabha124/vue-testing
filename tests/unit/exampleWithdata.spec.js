import { mount } from "@vue/test-utils";

const App = {
  data() {
    return {
      count: 0,
    };
  },
  template: `
  <div>Hello</div>

  <div>count : {{ count }}</div>

  <div v-if="count%2 === 0">count : {{ count }}. Count is even number</div>
  <div v-else>count : {{ count }}. Count is odd number</div>
  `,
};

//common warpper function
function factory({ data }) {
  return mount(App, {
    data,
  });
}

function refactoredFactory({ data }) {
  return mount(App, {
    data() {
      return data;
    },
  });
}

describe("App-Testing", () => {
  it("render when count is even", () => {
    const wrapper = factory({
      data() {
        return {
          count: 2,
        };
      },
    });
    expect(wrapper.html()).toContain("Count is even numbe");
  });

  it("render when count is odd", () => {
    const wrapper = factory({
      data() {
        return {
          count: 1,
        };
      },
    });
    expect(wrapper.html()).toContain("Count is odd numbe");
  });

  //xit will skip the test case
  xit("this test case will skip", () => {
    const wrapper = factory({
      data() {
        return {
          count: 1,
        };
      },
    });
    expect(wrapper.html()).toContain("Count is odd numbe");
  });

  //same test case by refactoring code
  it("render when count is even after refactor", () => {
    const wrapper = refactoredFactory({
      data: {
        count: 2,
      },
    });
    expect(wrapper.html()).toContain("Count is even numbe");
  });

  it("render when count is odd after refactor", () => {
    const wrapper = refactoredFactory({
      data: {
        count: 1,
      },
    });
    expect(wrapper.html()).toContain("Count is odd numbe");
  });
});
