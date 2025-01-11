import { Country } from "../types/country";

export interface CountryInfo {
  countryCode: string;
  borders: string[];
  populationHistory: { year: number; value: number }[];
  flagUrl: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  return response.json();
};

export const fetchCountryInfo = async (
  countryCode: string
): Promise<CountryInfo> => {
  const response = await fetch(`${API_BASE_URL}/${countryCode}`);

  if (!response.ok) {
    throw new Error("Failed to fetch country info");
  }
  return response.json();
};

export const fetchCountryName = async (
  countryCode: string
): Promise<Country> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data: Country[] = await response.json();
  return (
    data.find((country) => country.countryCode === countryCode) || {
      name: "Unknown",
      countryCode,
    }
  );
};
