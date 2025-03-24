import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; 

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [selectedRoom, setSelectedRoom] = useState();

  return (
    <ReservationContext.Provider value={{ selectedRoom, setSelectedRoom }}>
      {children}
    </ReservationContext.Provider>
  );
};


ReservationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useReservation = () => useContext(ReservationContext);
