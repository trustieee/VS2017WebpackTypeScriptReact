import * as React from "react";

export interface ITodoItemProps {
    name: string;
}

export class TodoItem extends React.Component<ITodoItemProps, any> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    public render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}