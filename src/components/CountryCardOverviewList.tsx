import { Country } from "../interfaces/Country";
import { CountryCardOverview } from "./CountryCardOverview";

interface CountryCardOverviewListProps {
    countries: Country[];
}

const CountryCardOverviewList = ({ countries }: CountryCardOverviewListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {countries.map((country) => (
                <CountryCardOverview key={country.name.common} country={country} />
            ))}
        </div>
    );
};
export { CountryCardOverviewList }