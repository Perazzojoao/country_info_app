'use client'

import { useEffect, useState } from "react";
import BorderWidget from "../BorderWidget";
import { NEXT_PUBLIC_URL } from "@/services/baseUrl";
import PopulationCard from "../PopulationCard";
import Image from "next/image";

type CountryPageProps = {
  name: string;
  countryCode: string;
}

const Country = ({ name, countryCode }: CountryPageProps) => {
  const [flagUrl, setFlagUrl] = useState<string>("");

  async function fetchFlagUrl() {
    const flagUrl = await fetch(`${NEXT_PUBLIC_URL}/api/country-info/flag`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country_name: name }),
    })
    const decodedFlagUrl: string = await flagUrl.json();

    return decodedFlagUrl;
  }
  useEffect(() => {
    fetchFlagUrl().then((flagUrl) => {
      setFlagUrl(flagUrl);
    });
  }, [countryCode, name]);

  return (
    <div className="mt-8">
      <h1 className="font-semibold text-3xl sm:text-5xl mb-6">{name}</h1>
      <div className="w-full h-full flex items-center justify-center mb-6">
        <Image
          src={flagUrl || ""}
          alt={`${name} flag`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-4">
        <BorderWidget countryCode={countryCode} />
        <PopulationCard name={name} />
      </div>
    </div>
  );
}

export default Country;