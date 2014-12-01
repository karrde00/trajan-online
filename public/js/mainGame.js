function Game(){

	// Attribrutes for the game to manage
	initialize(){
		this.players = [];
		this.turn = 0;
		this.quarter = 0;
		this.pause = false;
		this.senate_spaces = [
		    new Phaser.Circle(300, game.world.height-680, 175),
		    new Phaser.Circle(393, game.world.height-680, 25),
		    new Phaser.Circle(456, game.world.height-680, 25),
		    new Phaser.Circle(522, game.world.height-680, 25),
		    new Phaser.Circle(585, game.world.height-680, 25),
		    new Phaser.Circle(649, game.world.height-680, 25),
		    new Phaser.Circle(715, game.world.height-680, 25),
		    new Phaser.Circle(778, game.world.height-680, 25)
		];

		// Phaser bootstrapping
		this.phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: phaserPreload, create: phaserCreate, update: phaserUpdate});


	}
}


Game.prototype.phaserPreload = function() {
	// Trajan Tiles
	game.load.image('gameBoard', '/assets/gameBoardFinal.png');
    game.load.image('playerBoard', '/assets/pBoard.png');
    game.load.image('tile', '/assets/cDoorTile.png');
    game.load.image('card', '/assets/cCardWheat.png');
    game.load.image('tt_VP_yellow_white', '/assets/tTile00.png');
    game.load.image('tt_move_two_military_yellow_white', '/assets/tTile01.png');
    game.load.image('tt_move_military_green_blue', '/assets/tTile02.png');
    game.load.image('tt_move_two_military_yellow_white', '/assets/tTile03.png');
    game.load.image('tt_VP_yellow_yellow', '/assets/tTile04.png');
    game.load.image('tt_plus_two_pink_white', '/assets/tTile05.png');
    game.load.image('tt_move_construct_green_orange', '/assets/tTile06.png');
    game.load.image('tt_bread_pink_pink', '/assets/tTile07.png');
    game.load.image('tt_religion_white_white', '/assets/tTile09.png');
    game.load.image('tt_games_green_green', '/assets/tTile10.png');
    game.load.image('tt_two_cards_yellow_yellow', '/assets/tTile11.png');
    game.load.image('tt_two_cards_yellow_green', '/assets/tTile12.png');
    game.load.image('tt_two_cards_pink_green', '/assets/tTile13.png');
    game.load.image('tt_religion_white_green', '/assets/tTile14.png');
    game.load.image('tt_plus_two_pink_yellow', '/assets/tTile16.png');
    game.load.image('tt_plus_two_white_white', '/assets/tTile17.png');
    game.load.image('tt_move_military_blue_blue', '/assets/tTile18.png');
    game.load.image('tt_plus_two_pink_pink', '/assets/tTile19.png');
    game.load.image('tt_two_cards_blue_orange', '/assets/tTile20.png');
    game.load.image('tt_move_construct_yellow_orange', '/assets/tTile21.png');
    game.load.image('tt_two_cards_pink_white', '/assets/tTile22.png');
    game.load.image('tt_two_cards_orange_orange', '/assets/tTile23.png');
    game.load.image('tt_move_military_yellow_blue', '/assets/tTile24.png');
    game.load.image('tt_move_construct_green_blue', '/assets/tTile25.png');
    game.load.image('tt_move_two_military_yellow_pink', '/assets/tTile26.png');
    game.load.image('tt_plus_two_orange_pink', '/assets/tTile27.png');
    game.load.image('tt_move_construct_pink_orange', '/assets/tTile28.png');
    game.load.image('tt_VP_white_white', '/assets/tTile29.png');
    game.load.image('tt_bread_green_green', '/assets/tTile30.png');
    game.load.image('tt_move_two_construct_yellow_yellow', '/assets/tTile31.png');
    game.load.image('tt_two_cards_yellow_orange', '/assets/tTile32.png');
    game.load.image('tt_religion_blue_orange', '/assets/tTile33.png');
    game.load.image('tt_two_cards_blue_blue', '/assets/tTile34.png');
    game.load.image('tt_move_two_construct_orange_yellow', '/assets/tTile35.png');
    game.load.image('tt_games_pink_green', '/assets/tTile36.png');
    game.load.image('tt_move_two_military_orange_blue', '/assets/tTile37.png');
    game.load.image('tt_two_cards_blue_white', '/assets/tTile38.png');
    game.load.image('tt_VP_orange_white', '/assets/tTile39.png');
    game.load.image('tt_move_two_construct_blue_yellow', '/assets/tTile40.png');
    game.load.image('tt_plus_two_green_pink', '/assets/tTile41.png');
    game.load.image('tt_VP_orange_orange', '/assets/tTile42.png');
    game.load.image('tt_games_yellow_green', '/assets/tTile43.png');
    game.load.image('tt_bread_orange_green', '/assets/tTile44.png');
    game.load.image('tt_plus_two_blue_pink', '/assets/tTile45.png');
    game.load.image('tt_VP_blue_white', '/assets/tTile46.png');
    game.load.image('tt_move_two_construct_orange_orange', '/assets/tTile47.png');
    game.load.image('tt_plus_two_green_white', '/assets/tTile48.png');
    game.load.image('tt_move_construct_white_orange', '/assets/tTile49.png');
    game.load.image('tt_plus_two_pink_white', '/assets/tTile50.png');
    game.load.image('tt_VP_pink_pink', '/assets/tTile51.png');
    
    // Other random shitakis
    game.load.image('forum', '/assets/fTileGame.png');
    game.load.spritesheet('bonus', '/assets/bonus00.png', 100, 156);
    game.load.spritesheet('bonus2', '/assets/bonus01.png', 100, 156);
    game.load.spritesheet('ship1', '/assets/ship01.png', 174, 116);
    game.load.image('actionMarkO', '/assets/actionMarkerOrange.png');
    game.load.image('actionMarkG', '/assets/actionMarkerGreen.png');
    game.load.image('actionMarkP', '/assets/actionMarkerPink.png');
    game.load.image('actionMarkB', '/assets/actionMarkerBlue.png');
    game.load.image('actionMarkW', '/assets/actionMarkerWhite.png');
    game.load.image('actionMarkY', '/assets/actionMarkerYellow.png');
    game.load.image('tArch', '/assets/tArch.png');
    game.load.image('playerMark', '/assets/playerMarkGreen.png');
    game.load.image('bigTree', '/assets/bigTree.png');
}

Game.prototype.phaserUpdate = function() {
	// Stuff goes down here
}

Game.prototype.phaserCreate = function() {
	// body...
}

Game.prototype.movePlayerSenatePiece = function(currentPlayer, nextSpace) {
  currentPlayer.x = nextSpace.x;
  currentPlayer.y = nextSpace.y;
  // console.log(currentPlayer);
  return currentPlayer;
}

Game.prototype.senateSpaces = function(currentPlayer){
  for (var i = 0; i < this.senate_spaces.length-1; i++) {
    if (this.senate_spaces[i].contains(currentPlayer.x, currentPlayer.y)) {
      currentPlayer = this.movePlayerSenatePiece(currentPlayer, this.senate_spaces[i+1]);
      this.victory_points = i+2;
      break;
    };
  };
}



