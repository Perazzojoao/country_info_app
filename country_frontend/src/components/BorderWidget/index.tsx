'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CountryCard from "../CountryCard";
import { NEXT_PUBLIC_URL } from "@/services/baseUrl";
import { BorderCountry } from "@/@types";
import { useEffect, useMemo, useState } from "react";


type BorderWidgetProps = {
  countryCode: string;
}

const BorderWidget = ({ countryCode }: BorderWidgetProps) => {
  const [borderCountry, setBorderCountry] = useState({} as BorderCountry);

  async function fetchBorderCountries() {
    const borderList = await fetch(`${NEXT_PUBLIC_URL}/api/country-info/border`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country_code: countryCode }),
    })
    const decodedBorderList: BorderCountry = await borderList.json();
    return decodedBorderList;
  }

  const { officialName, borders, region } = borderCountry;
  useEffect(() => {
    fetchBorderCountries().then((data) => setBorderCountry(data));
  }, [countryCode]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">{officialName}</CardTitle>
        <CardDescription>
          <span className="font-semibold">
            {"Region: "}
          </span>
          {region}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="font-semibold">Shares borders with:</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
          {(borders?.length > 0 &&
            borders.map((border, index) => (
              <CountryCard key={index} name={border.commonName} countryCode={border.countryCode} />
            ))) || <p className="text-muted-foreground text-center">None</p>}
        </section>
      </CardContent>
    </Card>
  );
}

export default BorderWidget;