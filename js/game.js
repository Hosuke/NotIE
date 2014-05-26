/**
 * Created by Hosuke on 25/04/2014.
 *  * Copyright 2014 Huang Geyang
 */
// Initialize Phaser
var game = new Phaser.Game(320, 400, Phaser.AUTO, 'game_div');

// Our 'score' global variable
var score = 0;
var highscore = 0;


// Define all the states
game.state.add('boot', boot_state);
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);
game.state.add('lost', lost_state);
game.state.add('win', win_state);

// Start with the 'load' state
game.state.start('boot');