'use client'

import useAvailableCountries from "@/hooks/useAvailableCountries";
import CountryCard from "../CountryCard";
import { useState } from "react";
import SearchInput from "../SearchInput";

const CountriesList = () => {
  const { countriesList } = useAvailableCountries();
  const [search, setSearch] = useState("");

  function handleSearchChange(text: string) {
    setSearch(text);
  }

  return (
    <div>
      <SearchInput handleSearchChange={handleSearchChange} placeHolder="Search for country" />
      <h1>Countries List</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {countriesList
          .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
          .map((country, index) => (
            <CountryCard key={index} name={country.name} countryCode={country.countryCode} />
          ))}
      </div>
    </div>
  );
}

export default CountriesList;