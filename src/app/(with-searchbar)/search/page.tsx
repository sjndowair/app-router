const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;

  return <div>SearchPage{q}</div>;
};

export default Search;
