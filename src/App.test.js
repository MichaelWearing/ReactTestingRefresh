import * as React from "react";
import * as ReactDOM from "react-dom";
    // This works, but importing the render method itself is better //
//import { getQueriesForElement } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";

import { App } from "./App";

    // imported @testing-libaries version of this method
/* const render = (component) => {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
}; */

test("renders the correct content", () => {
     // Moved to seperate function to replace duplicate code //
  /* const root = document.createElement("div");
  ReactDOM.render(<App />, root); */

     // Basic tests, they work but are not perfect //
  /* expect(root.querySelector("h1").textContent).toBe("TODOs");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1"); */

  const { getByText, getByLabelText } = render(<App />);

    // Better way of testing with the help of @testing-library //
  /* expect(getByText("TODOs")).not.toBeNull();
  expect(getByLabelText("What needs to be done?")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull(); */

     // Refactord code from above //
  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

test("allows users to add items to their list", () => {
    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText("What needs to be done?")
        // fireEvent is being used to simulate a users actions
            // In this case, changing the value in the text field and then clicking the button
    fireEvent.change(input, { target: { value: "RTL Presetation Slides"} })
    fireEvent.click(getByText("Add #1"))

        // Check that the new input was created
    getByText("RTL Presetation Slides")
    getByText("Add #2")
})
