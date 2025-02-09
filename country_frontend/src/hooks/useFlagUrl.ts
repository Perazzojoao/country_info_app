import { FlagData } from '@/@types'
import { useQuery } from '@tanstack/react-query'

export default function useFlagUrl(countryName: string) {
	const { data, error, isLoading, refetch } = useQuery<FlagData>({
		queryKey: ['flag'],
		queryFn: () =>
			fetch(`/api/country-info/flag`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ country_name: countryName }),
			}).then(res => res.json()),
	})

	const flagUrl = data ?? ''

	return { flagUrl, error, isLoading, refetch }
}
