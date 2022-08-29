const fetch = require('node-fetch');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtTy-FTTdQWV1l7x9BHrtNw&part=snippet%2Cid&order=date&maxResults=9';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd925f9e514msh59f69670a0a2b49p1ce7aajsnabb107d97477',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try {
        const videos = await fetchData(API);

    } catch {

    }
})();