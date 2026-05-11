type Props = {
  text: string;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
};

export const InsertForm = ({ text, onTextChange, onAddTodo }: Props) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo();  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
      />
      <button type="submit">追加</button>
    </form>
  );
};