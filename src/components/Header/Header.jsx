import "./header.css";
import { useEffect, useState } from "react";

const dynamicDescription = ["Fundamental", "Core", "Popular", "Advanced"];

// This code defines a JavaScript function called getRandomIndex that takes a parameter max.
// It generates a random number between 0 and max - 1 (exclusive) using Math.random()
// and then rounds it down to the nearest whole number using Math.floor().
// The function returns this random index.
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

const dynamicColors = [
  "rgb(168, 222, 32)",
  "rgb(0, 242, 255)",
  "rgb(255, 0, 242)",
];
// This code defines a React functional component called Header.
// It uses useState to manage two state variables: randomDescription and randomColor.
// The useEffect hook is used to update these variables with random values when the component mounts.
// The component renders a header with a title and a paragraph where the text color and content change dynamically based on the state values.
export default function Header() {
  const [randomDescription, setRandomDescription] = useState(
    dynamicDescription[0]
  );
  // This JavaScript code snippet is using the useState hook from React to define a state variable named randomColor and a function to update it named setRandomColor.
  // The initial state value for randomColor is set to the first element of the dynamicColors array, which is rgb(168, 222, 32).
  // The useState hook is a way to add state to functional components in React.
  // It returns an array with two elements: the current state value and a function to update it.
  // In this case, randomColor is the current state value, and setRandomColor is the function to update it.
  const [randomColor, setRandomColor] = useState(dynamicColors[0]);

  // The [] passed as the second argument to the useEffect hook specifies the dependencies for the effect.
  // In this case, an empty array [] is passed, which means the effect will only run once when the component mounts.
  // If any of the dependencies inside the array change, the effect will re-run.
  // By passing an empty array, the effect will only run once, and subsequent re-renders of the component will not trigger it.
  useEffect(() => {
    setRandomDescription(
      dynamicDescription[getRandomIndex(dynamicDescription.length)]
    );
    setRandomColor(dynamicColors[getRandomIndex(dynamicColors.length)]);
  }, []);

  return (
    <header>
      <h1 className="header_title">React Basic Concepts</h1>
      <p className="header_description">
        <span style={{ color: randomColor }}>{randomDescription}</span> React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
