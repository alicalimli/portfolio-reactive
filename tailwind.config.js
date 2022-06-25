module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
