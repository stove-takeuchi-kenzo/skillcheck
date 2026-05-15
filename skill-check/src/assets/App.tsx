//メインコンポーネント

import React, { useState } from 'react'
import './App.css'
import type {Todo} from './TodoType' // Todo用Type読込
import type {Filter} from './FilterType' // Filter用Type読込
import { FilterSelect } from './Select' //　選択用コンポーネント読込
import { InsertForm } from './Insert' // 登録用コンポーネント読込
import { TodoList } from './List' // リスト用コンポーネント読込

export const App = () => {

  // 入力欄用
  // type Todo = {
  //   readonly id: number;
  //   completed: boolean;
  //   text: string;
  //   deleted: boolean;
  // };
  // id,完了済み,登録内容,削除済み

  // // 選択用
  // type Filter = 'all' | 'completed' | 'active' | 'deleted'
  // //全てのタスク、完了したタスク、現在のタスク、ごみ箱

  //変数初期化
  const [text, setText] = useState('');

  const [filter, setFilter] = useState<Filter>('all');

  const [todos, setTodos] = useState<Todo[]>([]);

  //選択欄更新用
  const handleFilterChange = (value: Filter) => {
    setFilter(value);
  };

  // 選択したデータのみフィルタして表示する
  const FilterTodo = todos.filter(todo => {
    // フィルタが「現在のタスク」の場合
    if (filter === 'active') return !todo.completed && !todo.deleted;
    // フィルタが「完了したタスク」の場合
    if (filter === 'completed') return todo.completed && !todo.deleted;
    // フィルタが「ごみ箱」の場合
    if (filter === 'deleted') return todo.deleted;
    // フィルタが「全てのタスク」の場合
    return !todo.deleted;
  });

  //登録欄更新用
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => { setText(e.target.value) };

  //登録ボタン押下時の更新
  const handleAddTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      completed: false,
      text,
      deleted: false
    };

    setTodos(prev => [newTodo, ...prev]);

    setText('');
  };

  // 「ごみ箱を空にする」ボタン押下
  const handleClear = () => {
    setTodos(prev => prev.filter(todo => !todo.deleted));
  };

  //TODOの完了チェックボックス更新
  const handleComplete = (id: number, checked: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      });

      return newTodos;
    });
  };

  //TODOの入力欄更新
  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: value };
        }
        return todo;
      });

      return newTodos;
    });
  };

  //TODOの削除状態更新
  const handleDelete = (id: number, checked: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, deleted: checked };
        }
        return todo;
      });

      return newTodos;
    });
  };

  return (
    <div>
      {/* コンポーネント分割 */}
      {/* select 一覧表*/}
      {/* 選択用コンポーネントを表示 */}
      <FilterSelect filter={filter} onChange={handleFilterChange} />

      {/* input 入力欄+登録ボタン/ごみ箱を空にするボタン*/}
      {/* フィルタが「全てのタスク」もしくは「現在のタスク」の場合に登録コンポーネントを表示 */}
      {
        (filter === 'all' || filter === 'active') && (
          <InsertForm
            text={text}
            onTextChange={handleTextChange}
            onAddTodo={handleAddTodo}
          />
        )
      }
      {/* フィルタが「ごみ箱を空にする」の場合にボタンを表示 */}
      {
        (filter === 'deleted') && (
          <button onClick={handleClear}>ごみ箱を空にする</button>
        )
      }
      {/* list全体 */}
      {/* →lineチェックボックス+入力欄+削除・復元ボタン*/}

      <TodoList
        todos={FilterTodo}
        onEdit={handleEdit}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>

  );



};