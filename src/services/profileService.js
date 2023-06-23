//get the profile data of a connected user 
import axios from "axios";
import { URL_PROFILE } from "../config";
const getUserData = async () => {
    //Retrioeve token from local storage or  session storage
    const token = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
    let errormessage = ""
    try {
        let profileData = {};

        const response = await axios.post(URL_PROFILE, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        profileData = { firstName, lastName }
        // const profileData = new userProfile(response.data)
        return profileData

    } catch (error) {
        const status = error.response;

        console.error(error);
        if (status === 400) {
            errormessage = "Bad request :we can not provide the ordered data ,try again"
            alert(errormessage)
        }
        if (status === 401) {
            errormessage = "Unauthorized: You are not authenticated to access this resource. Please login or provide valid credentials."
            alert(errormessage)
        }
        if (status === 500) {
            errormessage = "unavailable: the server is not responding."
            alert(errormessage)
        }
    }

};
const editProfile = async (updateData) => {
    let userInfos = {
        firstName: updateData.firstName,
        lastName: updateData.lastName,

    }
    let updatedInfos = {}
    let errormessage = ""
    const token = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
    try {
        const res = await axios.put(URL_PROFILE, userInfos, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        //return res.data
        const firstName = res.data.body.firstName;
        const lastName = res.data.body.lastName;
        updatedInfos = { firstName, lastName }
        // const profileData = new userProfile(response.data)
        return updatedInfos;



    } catch (error) {

        const status = error.response;

        console.error(error);
        if (status === 400) {
            errormessage = "Bad request :we can not provide the ordered data ,try again"
            alert(errormessage)
        }
        if (status === 401) {
            errormessage = "Unauthorized: You are not authenticated to access this resource. Please login or provide valid credentials."
            alert(errormessage)
        }
        if (status === 500) {
            errormessage = "unavailable: the server is not responding."
            alert(errormessage)
        }

    }

};


const profileService = {
    getUserData, editProfile

}
export default profileService;
