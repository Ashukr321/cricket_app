// Import necessary modules
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context for series data
const SeriesContext = createContext();

// Create a provider component to manage series data
const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(0);

  // Fetch data from the API using axios
  const fetchingData = async page => {
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/series_info?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}&id=47b54677-34de-4378-9019-154e82b9cc1a`
      );
      console.log("all series of");
      console.log(res.data.data.matchList); // Access the data property of the response
      setSeries(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts or when the page state changes
  useEffect(() => {
    fetchingData(page);
  }, [page]);

  // Handler function to update the page state
  const pageHandler = value => {
    setPage(value);
  };

  // Provide the series data and pageHandler function to the context
  return (
    <SeriesContext.Provider value={{ series, pageHandler }}>
      {children}
    </SeriesContext.Provider>
  );
};

// Create a hook to access the series context
const useSeries = () => {
  return useContext(SeriesContext);
};

// Export the provider and hook
export { SeriesContextProvider, useSeries };
