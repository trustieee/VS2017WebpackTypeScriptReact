import * as React from "react";
import { TodoItem, ITodoItemProps } from "../TodoItem";


interface ITodoListProps {
    items: ITodoItemProps[];
}

export class TodoList extends React.Component<ITodoListProps, any> {
    constructor(props: ITodoListProps) {
        super(props);
    }

    public render() {
        return (
            <ul>
                {this.props.items.map((todo, i) => {
                    return <TodoItem key={i} name={todo.name} />
                })}
            </ul>
        );
    }
}