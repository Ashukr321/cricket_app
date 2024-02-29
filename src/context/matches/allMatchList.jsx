import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for managing the current match data
const allMatchContext = createContext();

// Define a provider component to manage the state and fetching of current match data
const AllMatchContextProvider = ({ children }) => {
  // State to hold the current match data
  const [allMatch, setAllMatch] = useState([]);
  const [page,setPage] = useState(0);

  // Function to fetch current match data from the API
  const fetchingData = async (page) => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/matches?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}`
      );
      // Log the fetched data for debugging purposes
      console.log("all matches list")
      console.log(res.data.data);
      // Set the allMatch state with the fetched data
      setAllMatch(res.data.data);
    } catch (error) {
      // Handle any errors that might occur during the API request
      console.error("Error fetching current matches:", error.message);
    }
  };

  
  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchingData(page);
  }, [page]);

  const pageHandler = (value)=>{
    setPage(value)
  }
  // Provide the allMatch state value to the components using this context
  return (
    <allMatchContext.Provider value={{allMatch,pageHandler}}>
      {children}
    </allMatchContext.Provider>
  );
};

// Custom hook to easily access the allMatch data in functional components
const useAllMatch = () => {
  return useContext(allMatchContext);
};


// Export the provider and custom hook for usage in other parts of the application
export { AllMatchContextProvider, useAllMatch };
