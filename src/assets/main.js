const API =
  "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";

const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "09b48c25e6mshf6bbc1ec8178732p1b1ac1jsnceefd165a8d2",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

(async () => {
  try {
    const videos = await fetchData(API);
    console.log(videos.items);
    let view = `
    ${videos.items
      .map(
        (video) => `
         <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${video?.snippet?.thumbnails?.high?.url}" alt="${video?.snippet?.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video?.snippet?.title}
              </h3>
            </div>
          </div>
        `
      )
      .slice(0, 4)
      .join("")}
       
        `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
