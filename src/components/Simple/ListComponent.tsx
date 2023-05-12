import SimpleListItem from "./ListItemComponent";

interface ListProps {
  items: Array<string>,
  title?: string
}

export default ({ items, title }: ListProps) => (
  <>
    {title !== undefined && <h2>{title}</h2> }
    <ul>
      { items.map((item, index) => <SimpleListItem item={item} key={index}/>) }
    </ul>
  </>
);

