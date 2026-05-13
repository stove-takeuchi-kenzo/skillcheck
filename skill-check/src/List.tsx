import { TodoItem } from "./Item";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
    removed: boolean;
};

type Props = { todos: Todo[] 
     onEdit: (id: number, value: string) => void;
};


export const TodoList = ({ todos ,onEdit}: Props) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
                <TodoItem 
                key ={todo.id}
                todo={todo}
                onEdit={onEdit}/>
            ))}

        </ul>

    )

};