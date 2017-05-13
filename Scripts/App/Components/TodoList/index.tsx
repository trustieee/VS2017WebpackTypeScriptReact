import * as React from "react";
import { TodoItem, ITodoItemProps } from "../TodoItem";


interface ITodoListProps {
    items: ITodoItemProps[];
}

export class TodoList extends React.Component<ITodoListProps, any> {
    public render() {
        return (
            <ul>
                {this.props.items.map(i => {
                    return <TodoItem name={i.name} />
                })}
            </ul>
        );
    }
}