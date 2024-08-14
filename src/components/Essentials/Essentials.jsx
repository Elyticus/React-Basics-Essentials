import { CORE_CONCEPTS } from "../../data";
import Core from "../Core/Core";

export default function Essentials() {
  return (
    <menu>
      {CORE_CONCEPTS.map((concept) => (
        <Core key={concept.title} {...concept} />
      ))}
    </menu>
  );
}
