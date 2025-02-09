'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

type CountryCardProps = {
  name: string;
  countryCode: string;
}

const CountryCard = ({ countryCode, name }: CountryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/country?countryCode=${countryCode}&name=${name}`} className="hover:cursor-pointer hover:text-primary transition-all">
            <span className="text-lg sm:text-xl font-semibold">
              {name}
            </span>
          </Link>
        </CardTitle>
        <CardDescription>Country code: {countryCode}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CountryCard;