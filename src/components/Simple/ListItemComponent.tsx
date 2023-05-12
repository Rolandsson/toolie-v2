interface ListItemProps {
  item: string;
}

export default ({ item }: ListItemProps) => (
  <>
    <li>{ item }</li>
  </>
);