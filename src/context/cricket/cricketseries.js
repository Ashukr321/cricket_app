import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for managing the squad data
const cricketListContext = createContext();

// Define a provider component to manage the state and fetching of squad data
const CricketListProvider = ({ children }) => {
  // State to hold the squad data
  const [cricketList, setCricketList] = useState([]);
  const [page, setPage] = useState(0);

  // Function to fetch squad data from the API
  const fetchData = async (page) => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/series?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}`
      );
      // Log the fetched data for debugging purposes
      console.log("all cricketList list 🏏 ");
      console.log(res.data.data);
      // Set the squad state with the fetched data
      setCricketList(res.data.data);
    } catch (error) {
      // Handle any errors that might occur during the API request
      console.error("Error fetching squad data:", error.message);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData(page);
  }, [page]);

  const pageHandler = (value) => {
    setPage(value);
  };

  // Provide the squad state value to the components using this context
  return (
    <cricketListContext.Provider value={{ cricketList, pageHandler }}>
      {children}
    </cricketListContext.Provider>
  );
};

// Custom hook to easily access the squad data in functional components
const useCricketListSeries = () => {
  return useContext(cricketListContext);
};

// Export the provider and custom hook for usage in other parts of the application
export { CricketListProvider, useCricketListSeries };
