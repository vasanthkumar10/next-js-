interface BlogProps {
  params: string[];
}

export default function BlogsDetails(props: BlogProps) {
  return (
    <>
      <h1>Blog Details - {JSON.stringify(props)}</h1>
    </>
  );
}
