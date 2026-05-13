1
type Todo = {
    id: number;
    text: string;
    completed: boolean;
    removed: boolean;
};

type Props = { todos: Todo[] };


export const TodoList = ({ todos }: Props) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
                <li>
                    <input type="text"
                        value={todo.text} />
                </li>
            ))}

        </ul>

    )

};