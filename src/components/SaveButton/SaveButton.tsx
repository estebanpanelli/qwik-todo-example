import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import Save from "../icons/Save";

export default component$<HTMLAttributes<HTMLButtonElement>>((attrs) => {
  return (
    <button style={{ border: "none", background: "none", cursor: "pointer" }} {...attrs}>
      <Save size={18} />
    </button>
  );
});
