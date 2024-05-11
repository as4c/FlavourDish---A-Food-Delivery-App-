import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://https://api-foodie.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
