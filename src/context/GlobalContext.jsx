import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get(`http://api.tvmaze.com/search/shows?q=girls`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  let state = { data, setData };

  let handleFunction = { getMovies };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
