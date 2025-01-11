import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/country";
import { Country } from "../types/country";
import CountryList from "../components/CountryList";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Discover Countries
      </h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
