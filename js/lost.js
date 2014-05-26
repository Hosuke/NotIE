/**
 * Created by Hosuke on 24/05/2014.
 */
var w = 320;
var h = 400;

var lost_state = {

    create: function() {
        // Background
        this.game.stage.backgroundColor = '#2400CB';

        // Call the 'start' function when pressing the spacebar
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;


        // Game Over Text using PressStart2P
        this.game.add.image(60,35,'gameover');


        // Defining variables
        var style = { font: "20px Andale Mono", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-110, "You just tapped on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y-70, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

        // weibo
        this.game.add.button(80,220,'weibo',function(){
            share('xlwb');
        });

        //twitter
        this.game.add.button(190,220,'twitter',function(){
            share('twitter');
        });

        // Continue
        this.game.add.button(60,320,'continue',this.toMenu, this);


    },

    update: function() {

    },

    toMenu: function() {
        this.game.state.start('menu');
    }
};