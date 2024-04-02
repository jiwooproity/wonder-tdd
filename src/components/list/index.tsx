import "./index.css";

export interface ListItem {
  id: number;
  content: string;
}

interface ListProps {
  items: ListItem[];
}

const List = ({ items }: ListProps) => {
  return (
    <div className="list-container">
      <ul className="list-menu">
        {items.map((item: ListItem) => (
          <li key={item.id} className="list-item">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
