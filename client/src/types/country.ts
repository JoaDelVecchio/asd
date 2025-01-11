export type Country = {
  name: string;
  countryCode: string;
};

export type CountryInfo = {
  countryCode: string;
  borders: { countryCode: string; commonName: string }[];
  populationHistory: { year: number; value: number }[];
  flagUrl: string;
};
