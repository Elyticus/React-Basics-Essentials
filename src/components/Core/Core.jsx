/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const randomColors = [
  "rgb(168, 222, 32)",
  "rgb(0, 242, 255)",
  "rgb(255, 0, 242)",
  "rgb(97, 35, 213)",
  "rgb(254, 41, 30)",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// This is a React functional component named Core.
// It takes in two props: title and description.
// Inside the component, it uses the useState hook to create a state variable randomColor and a function setRandomColor to update it.
//The initial value of randomColor is set to the first element of the randomColors array.
// The useEffect hook is used to update the randomColor state variable whenever the component mounts.
// It calls the setRandomColor function with a random color from the randomColors array.
// The component returns a <li> element with the class name "core_concept".
// Inside the <li>, there are two <p> elements.
// The text color of the first <p> is set to the randomColor state variable.
// The text of the first <p> is set to the title prop, and the text of the second <p> is set to the description prop.
// Overall, this component renders a list item with a randomly colored title and description.

export default function Core({ title, description }) {
  const [randomColor, setRandomColor] = useState(randomColors[0]);

  useEffect(() => {
    setRandomColor(randomColors[getRandomIndex(randomColors.length)]);
  }, []);

  return (
    <li className="core_concept">
      <p style={{ color: randomColor }}>{title}</p>
      <p>{description}</p>
    </li>
  );
}
