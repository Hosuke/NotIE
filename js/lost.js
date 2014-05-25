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

        // Rectangle
        var rectGraphics = this.game.add.graphics(60, 60);
        rectGraphics.lineStyle(0.1, 0xffffff);
        rectGraphics.beginFill(0xffffff);
        rectGraphics.drawRect(0, 0, 200, 50);
        rectGraphics.endFill();


        // TODO: Game Over Text using PressStart2P
        var overtextstyle = { font: "35px Impact", fill: "#2400CB" };
        var overtext = this.game.add.text(w/2, 90, 0, overtextstyle);
        //overtext.font = "PostinoStd";
        overtext.text = 'Game Over';
        overtext.anchor.setTo(0.5, 0.5);

        //this.game.add.tween(logo).to({ y: h/2-100 }, 1000, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "20px Andale Mono", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-40, "You just tapped on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y+0, "Tap Screen to continue", style);
        text.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+40, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

    },

    update: function() {
        if (this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown) {
            this.game.state.start('menu');
        }
    }
};