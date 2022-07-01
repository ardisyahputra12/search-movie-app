class PlayerItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        let strName = this._player.show.name;
        let strImage = this._player.show.image.original;
        let strRuntime = this._player.show.runtime;
        let strLanguage = this._player.show.language;
        let strGenres = this._player.show.genres;
        let strRating = this._player.show.rating.average;
        let strSummary = this._player.show.summary;
        let strOfficialSite = this._player.show.officialSite;

        if (strName == null || strImage == null) {
            return this.remove();
        }

        this.innerHTML = `
            <style>
                .playerItem {
                    display: inline-block;
                }
                .card {
                    width: 230px;
                    min-height: 370px;
                    overflow: hidden;
                    margin: 0 auto;
                    border-radius: 20px 0 20px 0;
                    cursor: pointer;
                }
                .card:hover {
                    opacity: 0.8;
                    box-shadow: 0 0 8px #456;
                }
                .card .card-image img {
                    border-radius: 20px 0 0 0;
                    width: 230px;
                    height: 280px;
                }
                .card .card-content {
                    text-align: center;
                    padding: 10px;
                }
                h2,
                h3 {
                    margin: 0;
                }
                .playerDesc {
                    display: none;
                    z-index: 20;
                    position: fixed;
                    overflow: scroll;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: rgba(70, 70, 70, 0.8);
                    cursor: pointer;
                }
                .playerDesc .playerContainer {
                    width: 60%;
                    margin: 0 auto;
                    padding: 30px 30px 100px;
                    text-align: center;
                    background-color: #fff;
                    cursor: default;
                }
                .playerDesc .playerContainer .image img {
                    width: 80%;
                    height: 700px;
                }
                .playerDesc .playerContainer .content h2{
                    margin: 10px 0;
                }
                .playerDesc .playerContainer .content p {
                    margin-top: 10px;
                    font-size: 20px;
                }
                .playerDesc .playerContainer .content a {
                    font-size: 20px;
                }
                @media screen and (max-width: 1000px) {
                    .playerDesc .playerContainer {
                        width: 80%;
                    }
                }
                @media screen and (max-width: 670px) {
                    .playerDesc .playerContainer {
                        width: 90%;
                        padding: 20px 20px 100px;
                    }
                    .playerDesc .playerContainer .image img {
                        width: 85%;
                        height: 420px;
                    }
                    .playerDesc .playerContainer .content h2 {
                        font-size: 36px;
                    }
                    .playerDesc .playerContainer .content p {
                        font-size: 16px;
                    }
                    .playerDesc .playerContainer .content a {
                        font-size: 16px;
                    }
                }
            </style>
            <div class="row playerItem" title="See more">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="${strImage}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${strName}<br>(${strRating})</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="playerDesc" title="Click anywhere to close">
                <div class="playerContainer">
                    <div class="image">
                        <img src="${strImage}">
                    </div>
                    <div class="content">
                        <h2>${strName}</h2>
                        <p>
                            Rating: ${strRating}<br>
                            Genre: ${strGenres}<br>
                            Waktu: ${strRuntime} menit<br>
                            Language: ${strLanguage}<br>
                        </p>
                        <p>${strSummary}</p>
                        <a href="${strOfficialSite}">Klik for more ....</a>
                    </div>
                </div>
            </div>
        `;

        const playerDesc = () => {
            this.querySelector(".playerDesc").style.display = "block";
        }

        const closePlayerDesc = () => {
            this.querySelector(".playerDesc").style.display = "none";
        }

        this.querySelector(".card").addEventListener("click", playerDesc);
        this.querySelector(".playerDesc").addEventListener("click", closePlayerDesc);
    }
}

customElements.define("player-item", PlayerItem);