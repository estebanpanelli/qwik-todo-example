import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./AnimatedButton.css?inline";

export type AnimatedButtonProps = {
  status: "success" | "pending" | "fail" | null;
} & HTMLAttributes<HTMLButtonElement>;

export default component$<AnimatedButtonProps>((props) => {
  useStyles$(styles);

  const pendingClassName = "loading-btn--pending";
  const successClassName = "loading-btn--success";
  const failClassName = "loading-btn--fail";

  let extraClass = "";

  if (props.status === "pending") {
    extraClass = pendingClassName;
  }

  if (props.status === "success") {
    extraClass = successClassName;
  }

  if (props.status === "fail") {
    extraClass = failClassName;
  }

  return (
    <span class="loading-btn-wrapper">
      <button class={"loading-btn " + extraClass} {...props}>
        <span class="loading-btn__text">
          <Slot />
        </span>
      </button>
    </span>
  );
});
