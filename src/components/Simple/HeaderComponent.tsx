interface HeaderProps {
  title: string
}

export default ({ title }: HeaderProps) => (
  <>
    <h2>{ title }</h2>
  </>
);