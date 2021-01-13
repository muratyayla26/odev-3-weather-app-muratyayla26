import {useState, createContext} from "react";

export const ForecastContext = createContext(null);

export const ForecastProvider = ({children}) => {
    const [searchKey, setSearchKey] = useState("Ankara");
    const [results, setResults] = useState([]);
    const values = {
        searchKey,
        setSearchKey,
        results,
        setResults
    };
    console.log(searchKey);
    console.log(results);
    return (
        <ForecastContext.Provider value={values}>
            {children}
        </ForecastContext.Provider>
    );
};