const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        channelId: 'UCtTy-FTTdQWV1l7x9BHrtNw',
        part: 'snippet,id',
        order: 'date',
        maxResults: '9'
    },
    headers: {
        'X-RapidAPI-Key': 'd925f9e514msh59f69670a0a2b49p1ce7aajsnabb107d97477',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});