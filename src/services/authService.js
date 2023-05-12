import axios from "axios";


const apiUrl = "http://localhost:3001/api/v1/user/" //api link  to verify 
// to treat or not
/*async function register(email, password, firstName, lastName) {
  return axios.post(apiUrl + "signup", {
    email,
    password,
    firstName,
    lastName
  });
};
*/
// Login user
const login = async (userData) => {
  let user = {
    email: userData.email,
    password: userData.password
  }
  console.log(user);
  const response = await axios.post(apiUrl + 'login', user)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data)
  }

  return response.data
}
// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  //register,
  login,
  logout

}
export default authService;