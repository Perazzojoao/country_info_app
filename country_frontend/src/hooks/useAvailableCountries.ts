import { AvailableCountry } from '@/@types'
import { useQuery } from '@tanstack/react-query'

export default function useAvailableCountries() {
	const { data, error, isLoading, refetch } = useQuery<AvailableCountry[]>({
		queryKey: ['countries'],
		queryFn: () => fetch(`/api/available-countries`).then(res => res.json()),
	})

	const countriesList = data ?? []

	return { countriesList, error, isLoading, refetch }
}
