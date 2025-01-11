// Fetch all available countries
export const fetchAvailableCountries = async () => {
  const response = await fetch(process.env.API_AVAILABLE_COUNTRIES);

  if (!response.ok) {
    const error = new Error(
      `Failed to fetch available countries: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }

  return response.json(); // Return the parsed JSON data
};

// Fetch country information for borders
export const fetchCountryInfo = async (id) => {
  const response = await fetch(`${process.env.API_BASE_COUNTRIES_INFO}/${id}`);

  if (!response.ok) {
    const error = new Error(
      `Failed to fetch country info: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }

  return response.json(); // Return the parsed JSON data
};

// Fetch population data
export const fetchPopulationData = async (id) => {
  const response = await fetch(process.env.API_POPULATION);

  if (!response.ok) {
    const error = new Error(
      `Failed to fetch population data: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return (
    data.data.find((entry) => entry.country === id)?.populationCounts || []
  );
};

// Fetch flag data
export const fetchFlagData = async (id) => {
  const response = await fetch(process.env.API_FLAG);

  if (!response.ok) {
    const error = new Error(
      `Failed to fetch flag data: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data.data.find((entry) => entry.iso2 === id)?.flag || "";
};
