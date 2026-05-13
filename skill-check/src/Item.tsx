type Todo = {
    id: number;
    text: string;
    completed: boolean;
    removed: boolean;
};

type Props = { todo: Todo 
onEdit: (id: number, value: string) => void;
}

export const TodoItem = ({ todo ,onEdit}: Props) => {
    return (
                <li>
                    <input type="text"
                        value={todo.text} 
                        onChange={(e) => onEdit(todo.id, e.target.value)} />
                </li>
            )

}