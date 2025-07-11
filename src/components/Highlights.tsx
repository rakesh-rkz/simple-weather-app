
import React from 'react';
import { useSearch } from '../hooks/SearchContext';

interface Astro {
    sunrise: string;
    sunset: string;
}

interface ForecastDay {
    astro: Astro;
}

interface Forecast {
    forecastday: ForecastDay[];
}

interface CurrentWeather {
    uv: number;
    wind_kph: number;
    wind_dir: string;
    humidity: number;
}

interface SearchResults {
    current?: CurrentWeather;
    forecast?: Forecast;
}

const Highlights: React.FC = () => {
    const { searchResults } = useSearch() as {
        searchResults: SearchResults;
    };

    const forecast = searchResults?.forecast;
    const current = searchResults?.current;

    const uvCondition = (uvIndex?: number): string => {
        if (uvIndex === undefined) return '';
        if (uvIndex <= 2) return 'Low';
        else if (uvIndex <= 5) return 'Moderate';
        else if (uvIndex <= 7) return 'High';
        else if (uvIndex <= 10) return 'Very High';
        else return 'Extreme risk';
    };

    const windDirection = (dir?: string): string => {
        switch (dir) {
            case 'E':
                return 'EAST';
            case 'W':
                return 'WEST';
            case 'N':
                return 'NORTH';
            case 'S':
                return 'SOUTH';
            default:
                return dir ?? '';
        }
    };

    const getHumidityMessage = (humidity?: number): string => {
        if (humidity === undefined) return '';
        if (humidity < 30) return 'Low humidity';
        else if (humidity < 60) return 'Comfortable humidity';
        else if (humidity < 80) return 'High humidity';
        else return 'Very high humidity';
    };

    return (
        <div id="highlights" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">UV Index</div>
                <div className="text-2xl font-bold">{current?.uv}</div>
                <div className="text-xs text-gray-500">{uvCondition(current?.uv)}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">Wind Status</div>
                <div className="text-2xl font-bold">{current?.wind_kph} km/h</div>
                <div className="text-xs text-gray-500">
                    Direction: {windDirection(current?.wind_dir)}
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">Sunrise & Sunset</div>
                <div className="text-xs text-gray-500 font-bold">
                    {forecast?.forecastday?.[0]?.astro?.sunrise}
                </div>
                <div className="text-xs text-gray-500 font-bold">
                    {forecast?.forecastday?.[0]?.astro?.sunset}
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">Humidity</div>
                <div className="text-2xl font-bold">{current?.humidity}</div>
                <div className="text-xs text-red-500">{getHumidityMessage(current?.humidity)}</div>
            </div>
        </div>
    );
};

export default Highlights;
