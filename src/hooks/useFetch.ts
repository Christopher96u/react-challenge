import { useState, useEffect } from "react";

interface FetchResult<T> {
    response: T | null;
    isLoading: boolean;
    error: Error | null;
    fetchData: () => void;
}

const useFetch = <T>(url: string): FetchResult<T> => {
    const [response, setResponse] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const json = await res.json();
            console.log(json);
            setResponse(json);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

    return { response, error, isLoading, fetchData };
};
export { useFetch };