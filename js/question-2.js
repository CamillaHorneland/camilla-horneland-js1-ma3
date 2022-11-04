const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3b413b2f3a9f43b6aa2baee45dafdfcb";


const dataContainer = document.querySelector(".data");

async function getData() {

    const response = await fetch(url);
}


//key 3b413b2f3a9f43b6aa2baee45dafdfcb