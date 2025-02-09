import { PopulationResponse } from '@/@types'
import { useQuery } from '@tanstack/react-query'

export default function usePopulation(countryName: string) {
	const { data, error, isLoading, refetch } = useQuery<PopulationResponse>({
		queryKey: ['population'],
		queryFn: () =>
			fetch(`/api/country-info/population`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ country_name: countryName }),
			}).then(res => res.json()),
	})

	const population = data

	return { population, error, isLoading, refetch }
}
