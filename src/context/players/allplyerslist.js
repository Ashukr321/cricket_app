import { createContext,useContext,useEffect,useState } from "react";
import axios from "axios";

const playersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(0);

  const fetchingData = async(page)=>{
      const res = await axios.get(`https://api.cricapi.com/v1/players?apikey=${process.env.REACT_APP_MATCHES_KEY}&offset=${page}`)
      console.log("all players list ")
      console.log(res.data.data);
      setPlayers(res.data.data)
  }

  useEffect(()=>{
    fetchingData(page);
  },[page])
  const pageHandler = (value)=>{
    setPage(value);
  }
  return(
    <playersContext.Provider value={{players,pageHandler}}>
      {children}
    </playersContext.Provider>
  )
}

const usePlayer = ()=>{
  return useContext(playersContext);
}

export {PlayersProvider,usePlayer}