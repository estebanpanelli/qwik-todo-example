import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Todo from "~/components/Todo";

export default component$(() => {
  return (
    <div class="container">
      <h1>TODO App Qwik example</h1>
      <Todo />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik TODO App",
  meta: [
    {
      name: "description",
      content: "A Qwik example with a TODO app",
    },
  ],
};
