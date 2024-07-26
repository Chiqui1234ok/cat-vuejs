import axios from '@/axios.config'

const callAPI = async function(data, url, method) {
    const config = {
        method: method,
        url: url,
        data: data
    };
    const result = axios(config)
    .then(res => {
        return res.data;
    })
    .catch(function(err) {
        if(err)
            return {
                data: {
                    msg: err
                }
            };
    });
    return result;
}

export default callAPI;