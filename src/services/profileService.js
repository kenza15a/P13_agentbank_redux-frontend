//get the profile data of a connected user 
import axios from "axios";
import { URL_PROFILE } from "../config";
const getUserData = async () => {
    //Retrioeve token from local storage or  session storage
    const token = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));


    try {
        if (token) {
            const response = await axios.post(URL_PROFILE, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data && JSON.parse(localStorage.getItem("user"))) {
                //make sure if the user clicked on remebe me or not to knwo where to store infos
                localStorage.setItem('firstName', response.data.body.firstName)
                localStorage.setItem('lastName', response.data.body.lastName)
                console.log(response.data)
            } else {
                sessionStorage.setItem('firstName', response.data.body.firstName)
                sessionStorage.setItem('lastName', response.data.body.lastName)
                console.log(response.data)
            }
        }

    } catch (error) {
        // Handle the error
        console.error(error);
    }
};


const profileService = {
    getUserData

}
export default profileService;
