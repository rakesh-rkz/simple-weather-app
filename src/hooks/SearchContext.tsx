import { createContext, useState, useContext } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

// 1. Define the shape of your context
interface SearchContextType {
  searchResults: Record<string, any>;
  setSearchResults: Dispatch<SetStateAction<Record<string, any>>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  isCelsius: boolean;
  setIsCelsius: Dispatch<SetStateAction<boolean>>;
}

// 2. Create the context with undefined default
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// 3. Custom hook to access the context
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// 4. Provider props type
interface SearchProviderProps {
  children: ReactNode;
}

// 5. Provider component
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResults, setSearchResults] = useState<Record<string, any>>({});
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
        isCelsius,
        setIsCelsius,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
