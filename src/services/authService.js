import axios from "axios";
import { URL_LOGIN } from "../config";

// Login user
const login = async (userData) => {
  let user = {
    email: userData.email,
    password: userData.password,
    isRemeberMe: userData.remeberMe
  }
  console.log(user);
  const response = await axios.post(URL_LOGIN, user)

  if (response.data) {

    //if remeber me is checked we store token in localstorage else we store it in sessionStorage
    let token = "";
    if (user.isRemeberMe) {
      token = localStorage.setItem('user', JSON.stringify(response.data.body.token))
    } else { token = sessionStorage.setItem('user', JSON.stringify(response.data.body.token)) }

    if (token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axios.defaults.headers.common['Authorization']
    console.log(response.data)
  }

  return response.data
}
// Logout user
const logout = () => {

  //manage the  remove according to the state of remeberMe

  const toRemove = ['user', 'firstName', 'lastName'];
  toRemove.forEach(key => {
    localStorage.removeItem(key);
  });

  // Remove keys from sessionStorage
  toRemove.forEach(key => {
    sessionStorage.removeItem(key);
  });
}

const authService = {
  login,
  logout

}
export default authService;