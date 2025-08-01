import type { Link } from "../models/Link";
import "./Link.css";

const LinkItem: React.FC<{ item: Link; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <div className="link">
      <a href={props.item.url}> {props.item.title} </a>
      <button className="delete-btn" onClick={props.onRemoveTodo}>
        Del
      </button>
    </div>
  );
};

export default LinkItem;
