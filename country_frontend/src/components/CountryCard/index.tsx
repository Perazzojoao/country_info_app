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
          <Link href={"/"} className="hover:cursor-pointer hover:text-primary transition-all">
            {name}
          </Link>
        </CardTitle>
        <CardDescription>Country code: {countryCode}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CountryCard;