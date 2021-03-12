
import axios from 'axios'

// const graphql_helper_dev_server = 'http://167.99.52.210/'
const graphql_helper_dev_server = 'http://161.35.115.213/'
const graphql_helper_prod_server = 'http://165.227.89.140/'
const graphql_helper_local_host = 'http://127.0.0.1:5000/'

const apiClient = axios.create({
    baseURL: graphql_helper_prod_server,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});
export default apiClient;
