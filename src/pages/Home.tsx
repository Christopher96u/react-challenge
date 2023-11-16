import { useEffect, useState } from "react";
import { CountryCardDetails } from "../components/CountryCardDetails";
import { CountryCardOverviewList } from "../components/CountryCardOverviewList";
import { SearchInput } from "../components/SearchInput";
import { API_GET_DEFAULT_FIELDS, API_URL } from "../utils/constants/constants";
import { useFetch } from "../hooks/useFetch";
import { Country } from "../interfaces/Country";
import { HelpSection } from "../components/HelpSection";
import { Spinner } from "../components/Spinner";
import { NotFound } from "../components/NotFound";

const Home = () => {
    const [searchResults, setSearchResults] = useState<Country[]>([]);
    const [query, setQuery] = useState('');
    const { response, isLoading, error } = useFetch<Country[]>(
        query ? `${API_URL}/${query}${API_GET_DEFAULT_FIELDS}` : ''
    );
    const handleSearch = (newQuery: string) => {
        setQuery(newQuery);
    }
    // Update results when we get new data
    useEffect(() => {
        if (response) {
            setSearchResults(response);
        } else {
            setSearchResults([]);
        }

    }, [response]);

    // Clear results when text field is empty
    useEffect(() => {
        if (!query) {
            setSearchResults([]);
        }
    }, [query]);

    return (
        <main>
            <header>
                <HelpSection />
            </header>
            <section>
                <SearchInput onSearch={handleSearch} />
            </section>
            <section>
                <CountryCardDetails />
            </section>
            <section>
                {isLoading ? <Spinner /> : null}
                {error ? <NotFound errorMessage={error.message} /> : null}
                <CountryCardOverviewList countries={searchResults} />
            </section>
        </main>
    );
};

export { Home };