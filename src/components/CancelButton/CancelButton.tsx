import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import XCircle from "../icons/XCircle";

export default component$<HTMLAttributes<HTMLButtonElement>>((attrs) => {
  return (
    <button style={{ border: "none", background: "none", cursor: "pointer" }} {...attrs}>
      <XCircle size={18} />
    </button>
  );
});
