import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for managing the squad data
const CricketSearchContext = createContext();

// Define a provider component to manage the state and fetching of squad data
const CricketSearchContextProvider = ({ children }) => {
  // State to hold the squad data
  const [cricketSearchList, setCricketSearchList] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("t20");

  // Function to fetch squad data from the API
  const fetchData = async (page, search) => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/series?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}&search=${search}`
      );
      // Log the fetched data for debugging purposes
      console.log("all cricket search list 🏏 ");
      console.log(res.data.data);
      // Set the squad state with the fetched data
      setCricketSearchList(res.data.data);
    } catch (error) {
      // Handle any errors that might occur during the API request
      console.error("Error fetching squad data:", error.message);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData(page, search);
  }, [page, search]);

  const pageHandler = value => {
    setPage(value);
  };
  const searchHandler = value => {
    setSearch(value);
  };

  // Provide the squad state value to the components using this context
  return (
    <CricketSearchContext.Provider
      value={{ cricketSearchList, pageHandler, searchHandler }}
    >
      {children}
    </CricketSearchContext.Provider>
  );
};

// Custom hook to easily access the squad data in functional components
const useCricketSeries = () => {
  return useContext(CricketSearchContext);
};

// Export the provider and custom hook for usage in other parts of the application
export { CricketSearchContextProvider, useCricketSeries };
