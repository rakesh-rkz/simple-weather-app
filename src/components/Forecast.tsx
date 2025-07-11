import React, { useEffect, useState } from 'react';
import { useSearch } from '../hooks/SearchContext';

interface Condition {
    icon: string;
    text: string;
}

interface HourForecast {
    time: string;
    time_epoch: number;
    temp_c: number;
    temp_f: number;
    condition: Condition;
}

interface ForecastDay {
    hour: HourForecast[];
}

interface ForecastData {
    forecastday: ForecastDay[];
}

interface SearchResults {
    forecast?: ForecastData;
}

const Forecast: React.FC = () => {
    const { searchResults, isCelsius } = useSearch() as {
        searchResults: SearchResults;
        isCelsius: boolean;
    };

    const [futureForecast, setFutureForecast] = useState<HourForecast[]>([]);

    const forecast = searchResults?.forecast;
    const hours = forecast?.forecastday?.[0]?.hour;

    const filterUpcomingTimes = (hours: HourForecast[] = []): HourForecast[] => {
        const currentTimeEpoch = Math.floor(new Date().getTime() / 1000);
        return hours.filter(item => item.time_epoch > currentTimeEpoch);
    };

    useEffect(() => {
        if (hours) {
            setFutureForecast(filterUpcomingTimes(hours));
        }else{
            setFutureForecast([]);
            console.warn('No forecast data available');
        }
    }, [hours]);

    const timeSplit = (time: string): string => {
        return time.split(' ')[1];
    };

    return (
        <>
            <div className="font-semibold mb-4">
                Weather forecast for current day
            </div>
            <div className="grid grid-cols-5 gap-4 mb-8">
                {futureForecast.map((day, index) => (
                    <div key={index} className="text-center">
                        <div>{timeSplit(day.time)}</div>
                        <div className="text-2xl sm:pl-16 pl-8">
                            <img src={day.condition.icon} alt="weather_icon" />
                        </div>
                        <div className="text-sm">
                            {isCelsius ? day.temp_c : day.temp_f}°{isCelsius ? 'C' : 'F'}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Forecast;
