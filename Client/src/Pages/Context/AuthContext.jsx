import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../../Service/Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types"; 
// Create Context
const AuthContext = createContext(null);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
 AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



export const useAuth = () => useContext(AuthContext);
