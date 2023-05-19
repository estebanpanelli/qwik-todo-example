import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import Trash2 from "../icons/Trash2";

export default component$<HTMLAttributes<HTMLButtonElement>>((attrs) => {
  return (
    <button style={{ border: "none", background: "none", cursor: "pointer" }} {...attrs}>
      <Trash2 size={18} />
    </button>
  );
});
