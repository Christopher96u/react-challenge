import { useCountryContext } from "../context/CountryContext";
import { formatCurrency } from "../utils/helpers/formatCurrency";

const CountryCardDetails = () => {
    const { selectedCountry } = useCountryContext();
    return (
        <div className="flex justify-center">
            {selectedCountry ? (
                <div className="w-full md:w-1/2 lg:w-1/3 bg-white border-gray-200 rounded-xl shadow mt-4">
                    <div className="p-5 flex flex-col justify-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 h-20 flex items-center">
                            {selectedCountry.name.common}
                        </h5>
                        <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                            <li>Official name: {selectedCountry.name.official}</li>
                            <li>Currency name and symbol: {formatCurrency(selectedCountry.currencies)}</li>
                            <li>What side of the road they drive on: {selectedCountry.car.side}</li>
                            <li className="flex items-center w-full">
                                <span className="w-1/2">Flag:</span>
                                {selectedCountry.flags && (
                                    <img
                                        src={selectedCountry.flags.svg}
                                        alt={selectedCountry.name.common}
                                        className="w-1/2 h-auto"
                                    />
                                )}
                            </li>
                            <li className="flex items-center w-full">
                                <span className="w-1/2">Coat of Arms:</span>
                                {selectedCountry.coatOfArms && (
                                    <img
                                        src={selectedCountry.coatOfArms.svg}
                                        alt={`${selectedCountry.name.common} - coat of arms`}
                                        className="w-1/2 h-auto"
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            ) : <div className="md:h-52"></div>}
        </div>
    );
};

export { CountryCardDetails };