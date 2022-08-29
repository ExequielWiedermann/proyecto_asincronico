const fetch = require('node-fetch');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtTy-FTTdQWV1l7x9BHrtNw&part=snippet%2Cid&order=date&maxResults=9';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd925f9e514msh59f69670a0a2b49p1ce7aajsnabb107d97477',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

fetch(API, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));