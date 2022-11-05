const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3b413b2f3a9f43b6aa2baee45dafdfcb";


const dataContainer = document.querySelector(".data");

async function getData() {
    try {
        const response = await fetch(url);
        
        const data = await response.json();

        console.log();

        const games = data.results || [];
   
        dataContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            console.log(games[i].rating);
            console.log(games[i].name);
            console.log(games[i].tags.length);

            if (i === 8) {
              break;
        }

        dataContainer.innerHTML += `
            <div class="data">
                <span class="name">${games[i].name}</span>
                <span class="rating">${games[i].rating}</span>
                <span class="tags_count">${games[i].tags.length}</span>
            </div>
        `;
    }

    } catch (error) {
        console.log(error);
       alert("error", error.message);
    }

}

getData();

