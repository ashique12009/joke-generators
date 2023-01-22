const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "JZer/Y3N884l0+lLi9q6KA==D0hONPu4Wc6VixuR";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

const limit= 1;

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit;

async function getJoke() {

    try {
        jokeEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, please try again later!";
        console.log('ERROR', error);
    }
}

btnEl.addEventListener("click", getJoke);