import ClientComponent from "@/app/components/\bclient-component";

const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;

  return (
    <div>
      SearchPage{q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Search;
