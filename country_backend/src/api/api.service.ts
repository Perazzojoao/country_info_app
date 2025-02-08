import { Injectable } from '@nestjs/common';
import {
  TBorder,
  TPopulationData,
  TResponseAvaliableCountries,
  TResponseBorderCountries,
  TResponsePopulationData,
} from './types/apiTypes';

@Injectable()
export class ApiService {
  private avaliableCountriesUrl = 'https://date.nager.at/api/v3/AvailableCountries';
  private borderCountriesUrl = 'https://date.nager.at/api/v3/CountryInfo';
  private populationDataUrl = 'https://countriesnow.space/api/v0.1/countries/population';
  private flagUrl = 'https://countriesnow.space/api/v0.1/countries/flag/images';

  async getAvaliableCountries(): Promise<TResponseAvaliableCountries> {
    const response = await fetch(`${this.avaliableCountriesUrl}`);
    return await response.json();
  }

  async getBorderCountries(countryCode: string): Promise<TBorder[]> {
    const response = await fetch(`${this.borderCountriesUrl}/${countryCode}`);
    const borderResponse: TResponseBorderCountries = await response.json();
    return borderResponse.borders;
  }

  async getPopulationData(countryCode: string): Promise<TPopulationData> {
    const response = await fetch(`${this.populationDataUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso3: countryCode }),
    });
    const populationResponse = await response.json();
    return populationResponse.data;
  }

  async getFlagUrl(countryCode: string): Promise<string> {
    const response = await fetch(`${this.flagUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso3: countryCode }),
    });
    const data = await response.json();
    return data.data.flag;
  }
}
