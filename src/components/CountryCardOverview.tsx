import { useCountryContext } from "../context/CountryContext";
import { Country } from "../interfaces/Country";

interface CountryCardOverviewProps {
    country: Country;
}

const CountryCardOverview = ({ country }: CountryCardOverviewProps) => {

    const { selectedCountry, handleButtonClick } = useCountryContext();

    const handleClick = () => {
        handleButtonClick(country);
    };

    return (<div className="bg-white border-gray-200 rounded-xl shadow mt-4">
        <img src={country.flags.svg} alt={country.name.common} className="h-32 object-cover w-full rounded-t-xl" />
        <div className="p-5 flex flex-col justify-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-20 flex items-center">
                {country.name.common}
            </h5>
            <div className="inline-block">
                <button onClick={handleClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Get details ➡️
                </button>
            </div>
        </div>
    </div>
    );
};

export { CountryCardOverview };