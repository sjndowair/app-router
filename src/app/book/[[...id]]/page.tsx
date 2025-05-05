import ClientComponent from "@/app/components/\bclient-component";

const Book = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      book page[id], 나는 큐{id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Book;
