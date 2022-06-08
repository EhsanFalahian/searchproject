import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://api.github.com',
   headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:'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'
   }
})

export default Instance