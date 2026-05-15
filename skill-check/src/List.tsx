//リスト用コンポーネント
import './List.css'
import type {Todo} from './TodoType' // Todo用Type読込
import { TodoItem } from "./Item"; //リスト行用コンポーネント読込

type Props = {
    todos: Todo[]
    onComplete: (id: number, value: boolean) => void;
    onEdit: (id: number, value: string) => void;
    onDelete: (id: number, value: boolean) => void;
};


export const TodoList = ({ todos, onComplete, onEdit, onDelete }: Props) => {
    return (
        <ul className='todoList'>
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