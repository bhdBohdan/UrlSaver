import { useLinks } from "../context/link-context";
import LinkItem from "./Link";
import "./LinksSection.css";

const LinksSection: React.FC = () => {
  const linksCtx = useLinks();

  return (
    <div className="LinksSection">
      <h1>Your Links</h1>
      <ul>
        {linksCtx.items.map((item) => (
          <LinkItem
            key={item.id}
            item={item}
            onRemoveTodo={linksCtx.removeLink.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default LinksSection;
