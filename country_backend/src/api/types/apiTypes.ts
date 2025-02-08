export type TResponseAvaliableCountries = TAvaliableCountry[]

export type TAvaliableCountry = {
  countryCode: string
  name: string
}

export type TResponseBorderCountries = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: TBorder[]
}

export type TBorder = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: any
}

export type TResponsePopulationData = {
  error: boolean
  msg: string
  data: TPopulationData
}

export type TPopulationData = {
  country: string
  code: string
  iso3: string
  populationCounts: TPopulationCount[]
}

export type TPopulationCount = {
  year: number
  value: number
}

export type TResponseFlagUrl = {
  error: boolean
  msg: string
  data: FlagUrl
}

export type FlagUrl = {
  name: string
  flag: string
  iso2: string
  iso3: string
}