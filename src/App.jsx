import "./App.css";
import Header from "./components/Header/Header";
import Essentials from "./components/Essentials/Essentials";
import { useState } from "react";
import { EXAMPLES } from "./data";
import Core from "./components/Core/Core";
import ExampleButtons from "./components/ExampleButtons/ExampleButtons";

function App() {
  const [content, setContent] = useState("");

  // This code snippet defines a function called handleSelect that takes in a single argument called selectedButton.
  // Inside the function, it sets the value of the content state variable to the value of the selectedButton argument.
  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }

  return (
    <>
      <Header />
      <Essentials />
      <section className="tab_buttons">
        <h2 className="main_title">Examples:</h2>

        <div className="main_buttons">
          <ExampleButtons
            // This code snippet checks if the variable content is equal to the string "components".
            // If true, isSelected will be set to true, otherwise isSelected will be false.
            isSelected={content === "components"}
            // This code snippet defines an onSelect event handler that calls the handleSelect function with the argument "components" when triggered.
            onSelect={() => handleSelect("components")}
          >
            Components
          </ExampleButtons>

          <ExampleButtons
            isSelected={content === "JSX"}
            onSelect={() => handleSelect("JSX")}
          >
            JSX
          </ExampleButtons>

          <ExampleButtons
            isSelected={content === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </ExampleButtons>

          <ExampleButtons
            isSelected={content === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </ExampleButtons>
        </div>
      </section>

      {/*This JavaScript code snippet is part of a React component's render method. 
      It renders a section with the class name "dynamic_content". 
      The content of this section depends on the value of the content state variable.
If content is falsy (e.g., null, undefined, false, 0, ""), it renders an <h3> element with the class name "main_title" and the text "Select an example".
If content is truthy, it renders another React component called Core and passes it the properties from the EXAMPLES object using the spread operator (...). 
The key for the properties is the value of the content variable.
In other words, this code dynamically renders either a message to select an example or 
the Core component with the properties from the EXAMPLES object based on the value of content. */}
      <section className="dynamic_content">
        {!content ? (
          <h3 className="main_title">Select an example</h3>
        ) : (
          <Core {...EXAMPLES[content]} />
        )}
      </section>
    </>
  );
}

export default App;
