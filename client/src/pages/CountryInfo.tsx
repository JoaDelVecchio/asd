import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCountryInfo } from "../api/country";
import { Line } from "react-chartjs-2";
import Loading from "../components/Loading";
import { CountryInfo } from "../types/country";
import ErrorMessage from "../components/ErrorMessage";
import { createChartData, chartOptions } from "../utils/charts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register Chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CountryInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountryInfo = async () => {
      try {
        setLoading(true);
        const apiInfo = await fetchCountryInfo(id!);
        console.log(apiInfo);

        const transformedBorders: {
          countryCode: string;
          commonName: string;
        }[] = (apiInfo.borders || []).map((border) =>
          typeof border === "string"
            ? { countryCode: border, commonName: "Unknown" }
            : border
        );

        setCountryInfo({
          ...apiInfo,
          borders: transformedBorders,
        });
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    loadCountryInfo();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !countryInfo) {
    return <ErrorMessage message={error || "Failed to load country info"} />;
  }

  const chartData = createChartData(countryInfo.populationHistory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex flex-col items-center">
          {/* Country Name */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {countryInfo.countryCode}
          </h1>
          {/* Country Flag */}
          <img
            src={countryInfo.flagUrl}
            alt={`${countryInfo.countryCode} flag`}
            className="w-40 h-24 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Border Countries</h2>
        <ul className="flex flex-wrap gap-4">
          {countryInfo.borders.map((border) => (
            <li key={border.countryCode || Math.random()}>
              <Link
                to={`/countries/${border.countryCode}`}
                className="text-blue-600 hover:text-blue-800 transition"
              >
                {border.commonName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Population Over Time</h2>
        <Line
          key={JSON.stringify(chartData)}
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default CountryInfoPage;
