import axios from 'axios'
import { URL_PROFILE } from '../config'
/**
 * Function to get user datas first ant last name
 * @param {Object} userFirstLastName
 * @param {String} userFirstLastName.firstName user's first name
 * @param {String} userFirstLastName.lastName user's last name
 * @returns {Promise<any>} Promise with user datas
 */

export async function userUpDate(userFirstLastName) {
    console.log(userFirstLastName)
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.put(URL_PROFILE, userFirstLastName)

            console.log(res)

            resolve(res.data)
        } catch (error) {
            console.log('error userUpDate')
            console.log(error)
            reject(error)
        }
    })
}
