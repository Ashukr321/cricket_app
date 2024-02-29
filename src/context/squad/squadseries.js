import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for managing the squad data
const squadContext = createContext();

// Define a provider component to manage the state and fetching of squad data
const SquadSeriesProvider = ({ children }) => {
  // State to hold the squad data
  const [squad, setSquad] = useState([]);
  const [page,setPage] = useState(0);

  // Function to fetch squad data from the API
  const fetchingData = async (page) => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/players?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}`
      );
      // Log the fetched data for debugging purposes
      console.log("all squad");
      console.log(res.data.data);
      // Set the squad state with the fetched data
      setSquad(res.data.data);
    } catch (error) {
      // Handle any errors that might occur during the API request
      console.error("Error fetching squad data:", error.message);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchingData(page);
  }, [page]);

  const pagehandler = (value)=>{
    setPage(value);
  }

  // Provide the squad state value to the components using this context
  return (
    <squadContext.Provider value={{squad,pagehandler}}>
      {children}
    </squadContext.Provider>
  );
};

// Custom hook to easily access the squad data in functional components
const useSquadSeries = () => {
  return useContext(squadContext);
};

// Export the provider and custom hook for usage in other parts of the application
export { SquadSeriesProvider, useSquadSeries };
