const API = "https://rickandmortyapi.com/api/character";

const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const fetchData = async (url) => {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

(async () => {
  try {
    const characters = await fetchData(API);
    console.log(characters.results);
    let view = `
    ${characters.results
      .map(
        (character) => `
         <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${character?.image}" alt="${character?.name}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                    ${character?.name}
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
