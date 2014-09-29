/**
 * Created by Hosuke on 24/05/2014.
 */
var w = 320;
var h = 400;

var lost_state = {

    create: function() {
        // Background
        this.game.stage.backgroundColor = '#2093C9';

        // Call the 'start' function when pressing the spacebar
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;


        // Game Over Text using PressStart2P
        this.game.add.image(60,35,'gameover');


        // Defining variables
        var style = { font: "20px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-130, "You just tapped on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y-100, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

        var sharetext = this.game.add.text(x, y-60, "SHARE 分享", style);
        sharetext.anchor.setTo(0.5, 0.5);

        // weibo
        this.game.add.button(100,200,'weibo',function(){
            share('xlwb');
        });

        //twitter
        this.game.add.button(170,200,'twitter',function(){
            share('twitter');
        });

        // renren
        this.game.add.button(100,260,'renren',function(){
            share('renren');
        });

        // facebook
        this.game.add.button(170,260,'facebook',function(){
            share('facebook');
        });

        var wxsharetext = this.game.add.text(x, 320, "右上可分享至朋友圈", { font: "15px Arial", fill: "#ffffff" });
        wxsharetext.anchor.setTo(0.5, 0.5);

        // Continue
        var cont = this.game.add.button(60,330,'continue',this.toMenu, this);
        cont.alpha = 0;
        this.game.add.tween(cont).delay(1000).to({ alpha: 1}, 500).start();


    },

    update: function() {

    },

    toMenu: function() {
        this.game.state.start('menu');
    }
};