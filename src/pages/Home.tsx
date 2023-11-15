import { CountryCardDetails } from "../components/CountryCardDetails";
import { CountryCardOverview } from "../components/CountryCardOverview";
import { SearchInput } from "../components/SearchInput";

const Home = () => {
    return (
        <div className="bg-white">
            <h1>Home Page Layout</h1>
            <SearchInput />
            <CountryCardOverview />
            <CountryCardDetails />
        </div>
    );
};

export { Home };