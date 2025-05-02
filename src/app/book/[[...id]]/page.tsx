const Book = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  return <div>book page[id], 나는 큐{id}</div>;
};

export default Book;
