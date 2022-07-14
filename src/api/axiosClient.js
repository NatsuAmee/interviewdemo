import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'http://apidev1.mhotel9.asia/api',
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer 2003|8JNG0ZKsb5074XrFDffJLe3AjDZWVQMz1z8VSh8f',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Methods': "DELETE, GET, OPTIONS, POST",
    }
})

export default axiosClient