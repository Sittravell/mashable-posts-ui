let ApiUrl = 'http://127.0.0.1:8000/'

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production'){
    ApiUrl = 'https://mashable-api.sittravell.com/'
}

export default ApiUrl
