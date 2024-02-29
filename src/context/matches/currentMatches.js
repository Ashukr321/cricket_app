import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for managing the current match data
const currentMatchContext = createContext();

// Define a provider component to manage the state and fetching of current match data
const CurrentMatchContextProvider = ({ children }) => {
  // State to hold the current match data
  const [currentMatch, setCurrentMatch] = useState([]);
  const [page, setPage] = useState(0);

  // Function to fetch current match data from the API
  const fetchingData = async (page) => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}`
      );
      // Log the fetched data for debugging purposes
      console.log("\n current  all matches list ");
      console.log(res.data.data);
      // Set the currentMatch state with the fetched data
      setCurrentMatch(res.data.data);
    } catch (error) {
      // Handle any errors that might occur during the API request
      console.error("Error fetching current matches:", error.message);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchingData(page);
  }, [page]);

  const pageHandler = value => {
    setPage(value);
  };
  // Provide the currentMatch state value to the components using this context
  return (
    <currentMatchContext.Provider value={{ currentMatch, pageHandler }}>
      {children}
    </currentMatchContext.Provider>
  );
};

// Custom hook to easily access the currentMatch data in functional components
const useCurrentMatch = () => {
  return useContext(currentMatchContext);
};

// Export the provider and custom hook for usage in other parts of the application
export { CurrentMatchContextProvider, useCurrentMatch };
