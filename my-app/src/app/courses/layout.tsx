export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Course Header</h1>
      <hr />
      {children}
      <hr />
      <h1>Course Footer</h1>
    </>
  );
}
