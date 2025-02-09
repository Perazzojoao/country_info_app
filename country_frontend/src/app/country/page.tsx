import Country from "@/components/Country";

type CountryPageProps = {
  searchParams: Promise<{
    countryCode: string;
    name: string;
  }>;
};

const CountryPage = async ({ searchParams }: CountryPageProps) => {
  const { countryCode, name } = await searchParams;
  if (!countryCode || !name) {
    return null;
  }



  return (
    <Country countryCode={countryCode} name={name} />
  );
}

export default CountryPage;