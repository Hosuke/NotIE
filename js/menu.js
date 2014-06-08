/**
 * Created by Hosuke on 25/04/2014.
 */

var w = 320;
var h = 400;

var menu_state = {

    create: function() {
        // Call the 'start' function when pressing the spacebar
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        // Background

        // Logo
        var logo = this.game.add.text(w/2, -150, 'Not IE !', { font: '50px Arial', fill: '#fff' });
        logo.anchor.setTo(0.5, 0.5);
        this.game.add.tween(logo).to({ y: h/2-80 }, 1000, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "30px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-0, "Do not tap on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y+40, "Tap Here to start", style);
        text.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+90, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

        if (score > highscore) {highscore = score;}

        if (highscore > 0) {
            //Display high score
            var highscore_label = this.game.add.text (x, y+130, 'high score: '+ highscore, style);
            highscore_label.anchor.setTo(0.5, 0.5)
        }

    },

    update: function() {
        if (this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown) {
            this.game.state.start('play');
        }
    }
};