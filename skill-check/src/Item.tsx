// リスト行用コンポーネント(完了用チェックボックス、登録内容、削除・戻すボタン)

import type {Todo} from './TodoType' // Todo用Type読込

type Props = {
    todo: Todo
    onComplete: (id: number, value: boolean) => void;
    onEdit: (id: number, value: string) => void;
    onDelete: (id: number, value: boolean) => void;
}

export const TodoItem = ({ todo, onComplete, onEdit, onDelete }: Props) => {
    return (
        <li>
            <input type="checkbox"
                disabled={todo.deleted}
                checked={todo.completed}
                onChange={() => onComplete(todo.id, !todo.completed)} />
            <input type="text"
                disabled={todo.completed || todo.deleted}
                value={todo.text}
                onChange={(e) => onEdit(todo.id, e.target.value)} />
            <button onClick={() => onDelete(todo.id, !todo.deleted)} >
                {todo.deleted ? "戻す" : "削除"}</button>
        </li>
    )

}