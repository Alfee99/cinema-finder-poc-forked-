import { createContext, useContext, useState } from "react";

export const CinemaContext = createContext(null);

export const useCinema = () => useContext(CinemaContext);

export const CinemaProvider = ({ children }) => {
  const [selectedCinema, setSelectedCinema] = useState(null);
  return (
    <CinemaContext.Provider value={{ selectedCinema, setSelectedCinema }}>
      {children}
    </CinemaContext.Provider>
  );
};
