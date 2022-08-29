const fetch = require("node-fetch");

const API =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCtTy-FTTdQWV1l7x9BHrtNw&part=snippet%2Cid&order=date&maxResults=9";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "d925f9e514msh59f69670a0a2b49p1ce7aajsnabb107d97477",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
        try {
            const videos = await fetchData(API);
            let view = `
        ${videos.items.map(video =>
            `
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" id="content">
                        <div class="group relative">
                            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
                            </div>
                            <div class="mt-4 flex justify-between">
                                <h3 class="text-sm text-gray-700">
                                    <span aria-hidden="true" class="absolute inset-0"></span> Título
                                    ${video.snippet.title}
                                </h3>
                            </div>
                        </div>
                    </div>
            `).slice(0,4).join('')}        
        `;
    } catch {}
})();