// 選択用コンポーネント

type Filter = 'all' | 'completed' | 'active' | 'removed'

type Props = {
    filter: Filter;
    onChange: (value: Filter) => void;
};

export const FilterSelect = ({ filter, onChange }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.currentTarget.value as Filter);
    };

    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">すべてのタスク</option>
            <option value="completed">完了したタスク</option>
            <option value="active">現在のタスク</option>
            <option value="removed">ごみ箱</option>
        </select>
    );
};