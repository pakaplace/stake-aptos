import Axios from "axios";

const urls = {
    test: `http://localhost:8080`,
    development: 'https://0y66wfv0cg.execute-api.us-east-1.amazonaws.com',
    production: 'https://0y66wfv0cg.execute-api.us-east-1.amazonaws.com'
}
const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;