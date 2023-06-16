//get the profile data of a connected user 
import axios from "axios";
import { URL_PROFILE } from "../config";
import { userProfile } from "../models/userProfile";
const getUserData = async () => {
    //Retrioeve token from local storage or  session storage
    const token = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));

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

        console.error(error);
    }
};
const editProfile = async (updateData) => {
    let userInfos = {
        firstName: updateData.firstName,
        lastName: updateData.lastName,

    }
    console.log(userInfos)
    const token = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
    try {
        const res = await axios.put(URL_PROFILE, userInfos, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data


    } catch (error) {

        console.error(error);

    }

};


const profileService = {
    getUserData, editProfile

}
export default profileService;
