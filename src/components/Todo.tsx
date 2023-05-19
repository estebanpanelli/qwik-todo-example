import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import TodoItem from "./TodoItem/TodoItem";

export type TodoItem = {
  id: string;
  text: string;
  status: "pending" | "success" | "fail" | null;
};

export default component$(() => {
  const todoItemList = useStore<TodoItem[]>([
    {
      id: "1",
      text: "Learn Qwik",
      status: null,
    },
    {
      id: "2",
      text: "Have fun!",
      status: null,
    },
    {
      id: "3",
      text: "Listen to Rock music",
      status: null,
    },
  ]);

  useVisibleTask$(({ track }) => {
    track(todoItemList);
    console.log("todoItemList changed");
  });

  const onAddItem = $(() => {
    todoItemList.unshift({
      id: todoItemList.reduce((max, item) => Math.max(max, parseInt(item.id)), 0) + 1 + "",
      text: "New Item",
      status: null,
    });
  });

  return (
    <div id="todo-container">
      <button class="add-item" onClick$={onAddItem}>
        Add Item
      </button>
      <ul>
        {todoItemList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
});
