export const CORE_CONCEPTS = [
  {
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },

  {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },

  {
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },

  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
  },

  JSX: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
  },

  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
  },

  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
  },
};
