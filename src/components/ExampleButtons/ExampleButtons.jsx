/* eslint-disable react/prop-types */
export default function ExampleButtons({ children, isSelected, onSelect }) {
  return (
    <li className="main_buttons_list">
      {/* This JavaScript code is using a ternary operator to conditionally set the value of the className prop of a React component. 
      If the isSelected variable is true, the className will be set to "active", otherwise it will be set to "main_btn". 
      This is a common pattern in React to conditionally apply CSS classes to elements based on certain conditions. */}
      <button onClick={onSelect} className={isSelected ? "active" : "main_btn"}>
        {children}
      </button>
    </li>
  );
}
