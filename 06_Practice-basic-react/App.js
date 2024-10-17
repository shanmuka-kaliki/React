const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World with React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// lets console log heading
console.log(heading);

/**
 * EXERCISE 1:
 * Create below dom struture using React
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>Exercise 1</h1>
 *  </div>
 * </div>
 *
 */

const ex1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Exercise 1")
  )
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(ex1);

/**
 * EXERCISE 2:
 * Create below dom struture using React
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>Exercise 2</h1>
 *      <h1>Exercise 2</h1>
 *  </div>
 * </div>
 *
 */

const ex2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Exercise 2"),
    React.createElement("h1", {}, "Exercise 2"),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(ex2);

/**
 * EXERCISE 3:
 * Create below dom struture using React
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>Exercise 2</h1>
 *      <h1>Exercise 2</h1>
 *  </div>
 *  <div id="child">
 *      <h1>Exercise 2</h1>
 *      <h1>Exercise 2</h1>
 *  </div>
 * </div>
 *
 */

const ex3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Exercise 3"),
    React.createElement("h1", {}, "Exercise 3"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Exercise 3"),
    React.createElement("h1", {}, "Exercise 3"),
  ]),
]);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(ex3);


/**
 * 
 * CONCLUSION:
 * 
 * The code written upto now is lot more messy than HTML
 * So we use a concept called JSX which makes react developer life easier.
 * 
 */
