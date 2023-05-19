import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import Edit2 from "../icons/Edit2";

export default component$<HTMLAttributes<HTMLButtonElement>>((attrs) => {
  return (
    <button style={{ border: "none", background: "none", cursor: "pointer" }} {...attrs}>
      <Edit2 size={18} />
    </button>
  );
});
