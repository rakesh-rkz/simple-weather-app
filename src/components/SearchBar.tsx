import React, { useEffect, useRef, useState } from 'react';
import { useSearch } from '../hooks/SearchContext';
import { getWeather } from '../lib/fetch';
import { Toast } from '../lib/toast';


const defaultLocation = import.meta.env.VITE_DEFAULT_LOCATION || 'coimbatore'; // Fallback to 'coimbatore' if not set in env
if (!defaultLocation) {
    console.warn('Default location is not set in environment variables, using "coimbatore"');
}
const SearchBar: React.FC = () => {
    const { setSearchResults, isSearching, setIsSearching } = useSearch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searchValue, setSearchValue] = useState<string>(defaultLocation);

    const fetchData = () => {
        if (searchValue) {
            setIsSearching(true);
            getWeather({ payload: searchValue })
                .then((result: any) => { // Replace `any` with a more specific type if available
                    setSearchResults(result);
                })
                .catch((err: string) => {
                    Toast.Error(err);
                })
                .finally(() => {
                    setIsSearching(false);
                    setSearchValue('');
                });
        }
    };

    useEffect(() => {
        if (!isSearching && inputRef.current) {
            inputRef.current.blur();
        }
    }, [isSearching]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    useEffect(() => {
      fetchData()
    }, []);





    return (
        <div id="search-bar" className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <input
                ref={inputRef}
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search for places.."
            />
        </div>
    );
};

export default SearchBar;
