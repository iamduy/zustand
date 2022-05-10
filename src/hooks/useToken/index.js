import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

const useToken = () => {
  const router = useHistory();

  const setToken = (token) => {
    localStorage.setItem(process.env.SECRET_TOKEN_KEY ?? "", token);
  };

  const getToken = () => {
    return localStorage.getItem(process.env.SECRET_TOKEN_KEY ?? "") ?? "";
  };

  const clearStorage = () => {
    localStorage.clear();
    router.push('/login');
  };

  const decodeToken = () => {
    try {
      const accessToken = getToken();
      if (!accessToken) return;
      return jwtDecode(accessToken);
    } catch (error) {
      console.log(error);
    }
  };



  return { getToken, setToken, decodeToken, clearStorage };
};

export default useToken;
