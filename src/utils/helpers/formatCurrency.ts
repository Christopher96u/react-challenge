import { Currency } from "../../interfaces/Country";

const formatCurrency = (currencies: { [key: string]: Currency }): string => {
    const currencyKeys = Object.keys(currencies);

    if (!currencyKeys.length) {
        return 'Currency not found';
    }
    const firstCurrencyCode = currencyKeys[0];
    const firstCurrency = currencies[firstCurrencyCode];

    return `${firstCurrency.name} - ${firstCurrency.symbol}`;
};
export { formatCurrency };