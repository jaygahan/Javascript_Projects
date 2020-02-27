function displayType(player) {
    var playerType = player.getAttribute("data-player-type");
    alert(playerType + " played for the " + player.innerHTML + "!");
}