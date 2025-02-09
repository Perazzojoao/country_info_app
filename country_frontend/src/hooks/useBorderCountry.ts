import { BorderCountry } from '@/@types'
import { useQuery } from '@tanstack/react-query'

export default function useBorderCountries(countryCode: string) {
	const { data, error, isLoading, refetch } = useQuery<BorderCountry>({
		queryKey: ['border'],
		queryFn: () =>
			fetch(`/api/country-info/border`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ country_code: countryCode }),
			}).then(res => res.json()),
	})

	const borderList = data

	return { borderList, error, isLoading, refetch }
}
