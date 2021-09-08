let characters = document.querySelector("#characters");
characters.addEventListener("click", fetchCharacters);

let episodes = document.querySelector("#episodes");
episodes.addEventListener("click", fetchEpisodes);

let quotes = document.querySelector("#quotes");
quotes.addEventListener("click", fetchQuotes);

let deaths = document.querySelector("#deaths");
deaths.addEventListener("click", fetchDeaths);

async function fetchCharacters() {
  let output = document.querySelector(".output");
  output.innerHTML = "";
  let outputTitle = document.querySelector("#outputtitle");
  outputTitle.innerText = "Characters";

  let res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  let results = await res.json();
  results.map((character) => createCharacters(character));
}

function createCharacters(character) {
  let outputString = document.createElement("div");
  outputString.setAttribute("class", "character-info");
  outputString.innerHTML = `<img src="${character.img}"">
        <div class= display-info>
        <h5>Name:${character.portrayed}</h5>
        <h6>Actor Name:${character.name} </h6>
        <h6>Nick Name:${character.nickname}</h6>
        <h6>DOB:${character.birthday}</h6>
        <h6>Status:${character.status}</h6>
        </div>`;
  let output = document.querySelector(".output");
  output.appendChild(outputString);
  console.log(output);
}

async function fetchEpisodes() {
  let output = document.querySelector(".output");
  output.innerHTML = "";
  let outputTitle = document.querySelector("#outputtitle");
  outputTitle.innerText = "Episodes";
  let res = await fetch(`https://www.breakingbadapi.com/api/episodes`);
  let results = await res.json();
  results.map((episode) => createEpisodes(episode));
}
function createEpisodes(episode) {
  let outputString = document.createElement("div");
  outputString.setAttribute("class", "episode-info");
  outputString.innerHTML = `<h3>${episode.title}</h3>
           <hr>
          <p>Season:${episode.season} </p>
          <p>Release Date:${episode.air_date}</p>
          <p>Episode:${episode.episode}</p>
          <p>Characters: ${episode.characters}</p>`;
  let output = document.querySelector(".output");
  output.appendChild(outputString);
}

async function fetchQuotes() {
  let output = document.querySelector(".output");
  output.innerHTML = "";
  let outputTitle = document.querySelector("#outputtitle");
  outputTitle.innerText = "Quotes";
  let res = await fetch(`https://breakingbadapi.com/api/quotes`);
  let results = await res.json();
  results.map((quote) => createQuotes(quote));
}
function createQuotes(quote) {
  let outputString = document.createElement("div");
  outputString.setAttribute("class", "quote-info");
  outputString.innerHTML = `<h5>${quote.quote}</h5>
            <p>Author:${quote.author} </p>`;
  let output = document.querySelector(".output");
  output.appendChild(outputString);
}

async function fetchDeaths() {
  let output = document.querySelector(".output");
  output.innerHTML = "";
  let outputTitle = document.querySelector("#outputtitle");
  outputTitle.innerText = "Deaths";
  let res = await fetch(`https://breakingbadapi.com/api/deaths`);
  let results = await res.json();
  results.map((deaths) => createDeathlist(deaths));
}

function createDeathlist(deaths) {
  let outputString = document.createElement("div");
  outputString.setAttribute("class", "death-info");
  outputString.innerHTML = `<h3>${deaths.death}</h3>
               <hr>
              <p>Cause:${deaths.cause}</p>
              <p>Responsible:${deaths.responsible} </p>
              <p>Last Words:${deaths.last_words} </p>`;
  let output = document.querySelector(".output");
  output.appendChild(outputString);
}
