export interface ApiResponse {
	statusCode: number
	message: string
	data: AvailableCountry[] | BorderCountry | PopulationResponse | FlagData
}

export interface AvailableCountry {
	countryCode: string
	name: string
}

export interface BorderCountry {
	commonName: string
	officialName: string
	countryCode: string
	region: string
	borders: BorderCountry[]
}

export interface PopulationResponse {
	country: string
	code: string
	iso3: string
	populationCounts: PopulationCount[]
}

export interface PopulationCount {
	year: number
	value: number
}

export type FlagData = string

export interface BodyCountryCode {
	country_code: string
}

export interface BodyCountryName {
	country_name: string
}
