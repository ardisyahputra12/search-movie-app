import "../components/player-list";
import "../components/search-player.js";

class Data {
    static searchPlayer(keyword) {
        return fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Oops "${keyword}" is not found. Please check your input!`);
                }
            })
    }
}

const main = () => {
    const searchPlayerElement = document.querySelector("search-player");
    const playerListElement = document.querySelector("player-list");

    const eventSearch = () => {
        Data.searchPlayer(searchPlayerElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        playerListElement.players = results;
    }

    const fallbackResult = message => {
        playerListElement.renderError(message);
    }

    searchPlayerElement.keyupEvent = eventSearch;
}

export default main;