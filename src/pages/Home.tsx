import { CountryCardDetails } from "../components/CountryCardDetails";
import { CountryCardOverview } from "../components/CountryCardOverview";
import { SearchInput } from "../components/SearchInput";

const Home = () => {
    return (
        <div className="">
            <h1>Home Page Layout</h1>
            <SearchInput onSearch={() => { }} />
            <CountryCardOverview />
            <CountryCardDetails />
        </div>
    );
};

export { Home };