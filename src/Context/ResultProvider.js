import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
// const baseUrl = "https://google-search74.p.rapidapi.com"
const baseUrl = "https://google-search72.p.rapidapi.com"


export const ResultProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const getResults = async (type) => {
        setIsLoading(true);

        // fetch(`${baseUrl}${type}`, {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '610dd1061dmshb3526e88258c147p1e2682jsn5aea63236f4e',
		//         'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        //     }
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data.results.map((x, i) => (x)));
        //     setResults(data.results.map((x, i) => (x)));
        //     setIsLoading(false);            
        // })

        fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '610dd1061dmshb3526e88258c147p1e2682jsn5aea63236f4e',
        		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.items);
            setResults(data.items);
            setIsLoading(false);            
        }).catch(e => console.log(e));

    }


  return (
    <ResultContext.Provider
    value={{
        getResults,
        results, 
        searchTerm,
        setSearchTerm,
        isLoading
    }

    }
    >
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);