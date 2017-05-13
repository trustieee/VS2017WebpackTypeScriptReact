import * as React from "react";
import * as ReactDOM from "react-dom";
import { TodoList } from "./Components/TodoList";
import { ITodoItemProps } from "./Components/TodoItem";

const todos: ITodoItemProps[] = [
    {
        name: "foo"
    },
    {
        name: "bar"
    }
];

ReactDOM.render(<TodoList items={todos} />, document.getElementById("root"));