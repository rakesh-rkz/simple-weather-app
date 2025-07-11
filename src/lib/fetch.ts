import { Toast } from "./toast";

interface RequestApiParams {
    url: string;
    method: "GET" | "POST" | "PATCH" | "PUT";
    payload?: any; // You can refine this based on use case
}

const requestApi = async <T = any>({ url, method, payload }: RequestApiParams): Promise<T | Error> => {
    try {
        const reqObject: RequestInit = {
            method,
            headers: { 'content-type': 'application/json' },
        };

        if (method !== "GET" && payload) {
            reqObject.body = JSON.stringify(payload);
        }

        const response = await fetch(url, reqObject);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error: any) {
        Toast.Error(error.message || "Something went wrong");
        return error;
    }
};

interface GetWeatherParams {
    payload: string;
}

export const getWeather = ({ payload }: GetWeatherParams) => {
    const baseUrl = import.meta.env.VITE_WEATHER_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!baseUrl || !apiKey) {
        throw new Error(`Missing ${!baseUrl ? "REACT_APP_WEATHER_API_URL":" REACT_APP_API_KEY" }`);
    }

    const url = `${baseUrl}?key=${apiKey}&q=${payload}&days=1&aqi=yes&alerts=no`;

    return requestApi({ method: "GET", url });
};
