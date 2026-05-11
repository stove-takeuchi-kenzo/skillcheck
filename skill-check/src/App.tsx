import { useState } from 'react'
import './App.css'
import {FilterSelect} from'./Selct'

export const App = () => {

  // 入力欄用
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
    removed: boolean;
};

// 一覧用
type Filter = 'all' | 'active' | 'completed' | 'removed';

//変数初期化
const [text, setText] = useState('');

const [filter, setFilter] = useState<Filter>('all');

//一覧更新用
const handleFilterChange = (value: Filter) => {
        setFilter(value);
    };




  return(
    <div>
      {/* コンポーネント割 */}
      {/* select 一覧表*/}
      <FilterSelect filter={filter} onChange = {handleFilterChange} />

      {/* input 入力欄+登録ボタン/ごみ箱を空にするボタン*/}

      {/* list全体 */}
      {/* →lineチェックボックス+入力欄+削除・復元ボタン*/}

    </div>

  );



};