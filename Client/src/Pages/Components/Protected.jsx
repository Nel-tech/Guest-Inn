import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import PropTypes from "prop-types"; 

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; 

  return user ? children : <Navigate to="/login" />;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
