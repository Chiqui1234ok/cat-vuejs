const findApiUrl = function() {
    const apiURL = process.env.VUE_APP_ENV == 'development' ? process.env.VUE_APP_CAT_API_URL_DEV : process.env.VUE_APP_CAT_API_URL;
    return apiURL;
}

export default findApiUrl