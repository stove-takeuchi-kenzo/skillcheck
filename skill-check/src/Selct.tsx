// 一覧用
type Filter = 'all' | 'active' | 'completed' | 'removed'

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
            <option value="all">すべて</option>
            <option value="active">未完了</option>
            <option value="completed">完了</option>
            <option value="removed">削除済み</option>
        </select>
    );
};