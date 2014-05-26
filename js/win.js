/**
 * Created by Hosuke on 24/05/2014.
 */
var w = 320;
var h = 400;

var win_state = {

    create: function() {
        // Background
        this.game.stage.backgroundColor = '#ff4136';

        // Call the 'start' function when pressing the spacebar
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        // Rectangle
        var rectGraphics = this.game.add.graphics(60, 30);
        rectGraphics.lineStyle(0.1, 0xffffff);
        rectGraphics.beginFill(0xffffff);
        rectGraphics.drawRect(0, 0, 200, 50);
        rectGraphics.endFill();


        // TODO: Game Over Text using PressStart2P
        var overtextstyle = { font: "35px Impact", fill: "#ff4136" };
        var overtext = this.game.add.text(w/2, 60, 0, overtextstyle);
        //overtext.font = "PostinoStd";
        overtext.text = 'Game Over';
        overtext.anchor.setTo(0.5, 0.5);

        //this.game.add.tween(logo).to({ y: h/2-100 }, 1000, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "20px Andale Mono", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-110, "Good Job!", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-70, "Your score is "+score.toString(), style);
        text.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Share score
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
