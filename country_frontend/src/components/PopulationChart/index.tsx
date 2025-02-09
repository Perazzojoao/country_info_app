"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PopulationCount, PopulationResponse } from "@/@types"
import { useEffect, useState } from "react"
import { NEXT_PUBLIC_URL } from "@/services/baseUrl"

const chartConfig = {
  value: {
    label: "Population",
    color: "hsl(var(--primary))",
  },
  year: {
    label: "Year",
  },
} satisfies ChartConfig

type PopulationChartProps = {
  name: string
}

const PopulationChart = ({ name }: PopulationChartProps) => {
  const [populationCount, setPopulationCount] = useState<PopulationCount[]>([]);

  async function fetchPopulationCount() {
    const populationData = await fetch(`${NEXT_PUBLIC_URL}/api/country-info/population`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country_name: name }),
    })
    const decodedPopulationData: PopulationResponse = await populationData.json();

    return decodedPopulationData.populationCounts;
  }

  useEffect(() => {
    fetchPopulationCount().then((populationData) => {
      setPopulationCount(populationData);
    });
  }, [name]);

  if (!populationCount?.length || populationCount?.length === 0) return null;

  return (
    <div className="w-full mx-auto">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <LineChart
          accessibilityLayer
          data={populationCount}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis
            dataKey="value"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent hideLabel indicator="line"
              />
            }
          />
          <Line
            dataKey="year"
            type="linear"
            stroke="var(--color-value)"
            strokeWidth={2}
            dot={false}
            aria-hidden
          />
          <Line
            dataKey="value"
            type="linear"
            stroke="var(--color-value)"
            strokeWidth={2}
            dot={false}
          />

        </LineChart>
      </ChartContainer>
    </div >
  );
}

export default PopulationChart;
