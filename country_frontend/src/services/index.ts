'use server'

import { ApiResponse, AvailableCountry, BorderCountry, FlagData, PopulationResponse } from '@/@types'
import { BASE_URL } from './baseUrl'

const REVALIDATE_TIME = 60 * 10 // 10 minutes

export type ErrorResponse = {
	message: string
	status: number
}

export const getAvailableCountries = async (): Promise<AvailableCountry[] | ErrorResponse> => {
	const response = await fetch(`${BASE_URL}/available-countries`, {
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_TIME,
		},
	})

	const resp: ApiResponse = await response.json()
	if (!response.ok) {
		return {
			message: resp.message,
			status: resp.statusCode,
		}
	}

	const data = resp.data as AvailableCountry[]
	return data
}

export const getBorderCountries = async (countryCode: string): Promise<BorderCountry[] | ErrorResponse> => {
	const response = await fetch(`${BASE_URL}/country-info/border`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ country_code: countryCode }),
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_TIME,
		},
	})
	const resp: ApiResponse = await response.json()
	if (!response.ok) {
		return {
			message: resp.message,
			status: resp.statusCode,
		}
	}

	const data = resp.data as BorderCountry[]
	return data
}

export const getPopulationData = async (countryName: string): Promise<PopulationResponse | ErrorResponse> => {
	const response = await fetch(`${BASE_URL}/country-info/population`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ country_name: countryName }),
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_TIME,
		},
	})
	const resp: ApiResponse = await response.json()
	if (!response.ok) {
		return {
			message: resp.message,
			status: resp.statusCode,
		}
	}

	const data = resp.data as PopulationResponse
	return data
}

export const getFlagUrl = async (countryCode: string): Promise<FlagData | ErrorResponse> => {
	const response = await fetch(`${BASE_URL}/country-info/flag`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ country_name: countryCode }),
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_TIME,
		},
	})
	const resp: ApiResponse = await response.json()
	if (!response.ok) {
		return {
			message: resp.message,
			status: resp.statusCode,
		}
	}

	const data = resp.data as string
	return data
}
