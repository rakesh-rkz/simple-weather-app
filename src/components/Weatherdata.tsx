import React from 'react';
import { useSearch } from '../hooks/SearchContext';


interface WeatherCondition {
    text: string;
    icon: string;
}

interface CurrentWeather {
    condition: WeatherCondition;
    feelslike_c: number;
    temp_c: number;
    temp_f: number;
}

interface LocationInfo {
    name: string;
    region: string;
    localtime: string;
}

interface SearchResults {
    location?: LocationInfo;
    current?: CurrentWeather;
}

const WeatherData: React.FC = () => {
    const { searchResults, isCelsius, setIsCelsius } = useSearch() as {
        searchResults: SearchResults;
        isCelsius: boolean;
        setIsCelsius: (val: boolean) => void;
    };

    const location = searchResults?.location;
    const current = searchResults?.current;

    const updateCelsius = () => {
        setIsCelsius(!isCelsius);
    };

    return (
        <div className="flex justify-between my-4">
            <div className="items-start">
                <div className="text-gray-500">{location?.localtime}</div>

                <div className="text-sm flex items-center mt-2">
                    <div className="bg-slate-800 rounded-full p-2 text-white mr-2">
                        {current?.condition?.icon && (
                            <img src={current.condition.icon} className="w-6" alt="weather-icon" />
                        )}
                    </div>
                    <span>{current?.condition?.text}</span>
                </div>

                <div className="text-sm mt-1">Feel's like: {current?.feelslike_c}</div>

                <div className="mt-4 text-gray-600 text-sm">
                    <span className="font-medium text-blue-600">
                        {location?.name}, {location?.region}
                    </span>
                </div>
            </div>

            <div className="justify-center items-center">
                <div className="text-6xl font-semibold">
                    {isCelsius ? current?.temp_c : current?.temp_f}°{isCelsius ? 'C' : 'F'}
                </div>
                {current?.condition?.icon && (
                    <img src={current.condition.icon} alt="weather_icon" />
                )}
            </div>

            <div className="items-center">
                <button className="bg-gray-200 p-4 rounded-full" onClick={updateCelsius}>
                    °{isCelsius ? 'C' : 'F'}
                </button>
            </div>
        </div>
    );
};

export default WeatherData;
