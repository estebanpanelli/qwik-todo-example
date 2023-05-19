import { $, component$, useSignal } from "@builder.io/qwik";
import type { TodoItem } from "../Todo";
import EditButton from "../EditButton/EditButton";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import SaveButton from "../SaveButton/SaveButton";
import CancelButton from "../CancelButton/CancelButton";

export type TodoItemProps = {
  todoItem: TodoItem;
};

export default component$<TodoItemProps>(({ todoItem }) => {
  const editing = useSignal(false);
  const itemText = useSignal(todoItem.text);

  const onDone = $((item: TodoItem) => {
    item.status = "pending";
    setTimeout(() => {
      Math.random() > 0.25 ? (item.status = "success") : (item.status = "fail");
    }, 1000);
  });

  const onEditItem = $(() => {
    editing.value = true;
  });

  const onFinishEdit = $((item: TodoItem) => {
    item.text = itemText.value;
    editing.value = false;
  });

  const onDeleteItem = $((item: TodoItem) => {
    console.log("delete item", item);
  });

  return (
    <li class="todo-item">
      {editing.value ? (
        <>
          <input type="text" bind:value={itemText} />
          <SaveButton onClick$={() => onFinishEdit(todoItem)} />
          <CancelButton onClick$={() => (editing.value = false)} />
        </>
      ) : (
        <>
          <EditButton onClick$={onEditItem} />
          <DeleteButton onClick$={() => onDeleteItem(todoItem)} />
          <p class="todo-text">{todoItem.text}</p>
          <AnimatedButton status={todoItem.status} onClick$={() => onDone(todoItem)}>
            Done
          </AnimatedButton>
        </>
      )}
    </li>
  );
});
