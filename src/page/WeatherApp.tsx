import { useSearch } from '../hooks/SearchContext'
import SearchBar from '../components/SearchBar'
import WeatherData from '../components/Weatherdata'
import Highlights from '../components/Highlights'
import Forecast from '../components/Forecast'
import CustomLoader from '../components/CustomLoader'

const WeatherApp = () => {

    const { isSearching } = useSearch() as {
        isSearching: boolean;
    };

    return (
        <>
            {isSearching && <CustomLoader />}
            <main className="App min-h-screen">
                <div className={`min-h-screen bg-slate-400 flex items-center justify-center ${isSearching && 'blur-md'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl  w-full">
                        <SearchBar />
                        <div className="border-b mb-4 opacity-20">
                        </div>
                        <WeatherData />
                        <div className="border-b mb-4  opacity-20">
                        </div>
                        <Highlights />
                        <div className="border-b mb-4  opacity-20">
                        </div>
                        <Forecast />
                    </div>
                </div>
            </main>
        </>
    )
}

export default WeatherApp