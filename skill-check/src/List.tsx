import { TodoItem } from "./Item";

type Todo = {
    readonly id: number,
    completed: boolean,
    text: string,
    deleted: boolean
};

type Props = {
    todos: Todo[]
    onComplete: (id: number, value: boolean) => void;
    onEdit: (id: number, value: string) => void;
    onDelete: (id: number, value: boolean) => void;
};


export const TodoList = ({ todos, onComplete, onEdit, onDelete }: Props) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onComplete={onComplete}
                    onEdit={onEdit}
                    onDelete={onDelete} />
            ))}

        </ul>

    )

};