import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PopulationChart from "../PopulationChart";

type PopulationCardProps = {
  name: string;
}

const PopulationCard = ({ name }: PopulationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-3">Population over time</CardTitle>
      </CardHeader>
      <CardContent>
        <PopulationChart name={name} />
      </CardContent>
    </Card>

  );
}

export default PopulationCard;