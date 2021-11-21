var GAMES = [ 
{
    gameTitle: "Crash",
gameThumbImg: "thumb1_150x150.jpg",
gameFullImg: "thumb1_150x150.jpg",
gameBriefDescription: "Bad Ratings",
gameDescription: "lorem35",
gameRating: "E",
},
{
    gameTitle: "Reach",
gameThumbImg: "thumb2_150x150.jpg",
gameFullImg: "thumb2_150x150.jpg",
gameBriefDescription: "Purchase Now",
gameDescription: "lorem35",
gameRating: "E",
},
{
    gameTitle: "4",
gameThumbImg: "thumb3_150x150.jpg",
gameFullImg: "thumb3_150x150.jpg",
gameBriefDescription: "Filler",
gameDescription: "lorem35",
gameRating: "T",
},
{
    gameTitle: "Spyro",
gameThumbImg: "thumb4_150x150.jpg",
gameFullImg: "thumb4_150x150.jpg",
gameBriefDescription: "Half-off",
gameDescription: "lorem35",
gameRating: "M",
},
{
    gameTitle: "Nemo",
gameThumbImg: "thumb5_150x150.jpg",
gameFullImg: "thumb5_150x150.jpg",
gameBriefDescription: "Good gameplay",
gameDescription: "lorem35",
gameRating: "T",
},
{
    gameTitle: "Recon",
gameThumbImg: "thumb6_150x150.jpg",
gameFullImg: "thumb6_150x150.jpg",
gameBriefDescription: "This game is decent",
gameDescription: "lorem35",
gameRating: "M",
},
{
    gameTitle: "Ghost",
gameThumbImg: "thumb7_150x150.jpg",
gameFullImg: "thumb7_150x150.jpg",
gameBriefDescription: "This game is bad",
gameDescription: "lor",
gameRating: "T",
},
{
    gameTitle: "Titans",
gameThumbImg: "thumb8_150x150.jpg",
gameFullImg: "thumb8_150x150.jpg",
gameBriefDescription: "This game is good",
gameDescription: "This Game is good",
gameRating: "E",
},
]
   

function loadData () {
    $.each(GAMES, function(idx, game ){
        $("#app").append(`<div id="${idx}" class="game-holder">
        <h4>${game.gameTitle}</h4>
        <div class="game-image">
          <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}" />
        </div>
        <div class="brief-rating">
          <div class="brief-des">
           ${game.gameBriefDescription}
          </div>
          <div class="rating">${game.gameRating}</div>
        </div>
      </div>`);
});

// for(let i = 0; i < GAMES.length; i++){
    // console.log(GAMES[i].gameTitle);
// }
}

function initListeners() {}

    $(document).ready(function () {
        // initListeners();
        loadData();
    });
