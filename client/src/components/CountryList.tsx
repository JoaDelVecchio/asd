import React from "react";
import { Link } from "react-router-dom";
import { Country } from "../types/country";

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {countries.map((country) => (
        <li
          key={country.countryCode} // Ensure keys are unique and based on `countryCode`
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition transform duration-300"
        >
          <Link
            to={`/countries/${country.countryCode}`} // Ensure links are correct
            className="block text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
