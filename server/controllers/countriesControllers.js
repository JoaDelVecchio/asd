import dotenv from "dotenv";
import {
  fetchAvailableCountries,
  fetchCountryInfo,
  fetchPopulationData,
  fetchFlagData,
} from "../utils/fetchData.js";

dotenv.config();

// Fetch all available countries
export const getAvailableCountries = async (req, res, next) => {
  try {
    // Fetch and send available countries
    const countries = await fetchAvailableCountries();
    res.status(200).json(countries);
  } catch (error) {
    next(error); // Pass errors to middleware
  }
};
export const getCountryInfo = async (req, res, next) => {
  const { id } = req.params;

  console.log("getCountryInfo called with ID:", id); // Debug log

  try {
    const countryInfo = await fetchCountryInfo(id);
    const populationHistory = await fetchPopulationData(countryInfo.commonName);
    const flagUrl = await fetchFlagData(id);

    // Log results for debugging
    console.log("Country Info:", countryInfo);
    console.log("Population History:", populationHistory);
    console.log("Flag URL:", flagUrl);

    if (!countryInfo) {
      throw new Error(`Failed to fetch country info for ID: ${id}`);
    }

    res.status(200).json({
      countryCode: id,
      borders: countryInfo.borders || [],
      populationHistory,
      flagUrl,
    });
  } catch (error) {
    console.error("Error in getCountryInfo:", error.message);
    next(error); // Pass errors to middleware
  }
};
