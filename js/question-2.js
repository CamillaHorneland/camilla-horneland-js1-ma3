const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3b413b2f3a9f43b6aa2baee45dafdfcb";


const dataContainer = document.querySelector(".data");

async function getData() {
    try {
        const response = await fetch(url);
        
        const data = await response.json();

        console.log(data);

        const games = games.results;
   
        dataContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);

            if (i === 7) {
              break;
        }

        dataContainer.innerHTML += `<div class="data">${games[i].name}</div>`;
    }

    } catch (error) {
        console.log(error);
        dataContainer.innerHTML =alert("error", error);
    }

}

getData();

