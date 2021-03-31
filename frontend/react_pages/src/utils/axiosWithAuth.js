import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('authToken')
  
  return axios.create({
    //update base url to server url
    baseURL: "https://reqres.in/api/",
    headers: { Authorization: token }
  
  })
}


export default axiosWithAuth;