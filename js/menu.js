/**
 * Created by Hosuke on 25/04/2014.
 * Copyright 2014 Huang Geyang
 */

var w = 320;
var h = 400;

var menu_state = {

    create: function() {
        this.game.stage.backgroundColor = '#323A45';
        // Call the 'start' function when pressing the spacebar
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        // Background

        // Logo
        var logo = this.game.add.text(w/2, -170, 'NOT IE', { font: '50px Arial', fill: '#fff' });
        logo.anchor.setTo(0.5, 0.5);
        logo.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
        this.game.add.tween(logo).to({ y: h/2-100 }, 1500, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "25px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-60, "Do not tap on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);

        // Adding a text centered on the screen
        var chinesetext = this.game.add.text(x, y-30, "不要点IE哟", style);
        chinesetext.anchor.setTo(0.5, 0.5);

        // Sound Toggle
        this.sound_toggle = this.game.add.button(w-20, 20, 'sound', this.toggle_sound, this);
        this.sound_toggle.anchor.setTo(1, 0);
        this.sound_toggle.alpha = 0;
        this.game.add.tween(this.sound_toggle).delay(500).to({ alpha: 1}, 500).start();
        if (!sound)
            this.sound_toggle.frame = 1;

        var scorestyle = { font: "20px Arial", fill: "#ffffff" };

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+20, "Score: " + score, scorestyle);
            score_label.anchor.setTo(0.5, 0.5);
        }

        if (score > highscore) {
            highscore = score;

            //Save highscore to cookie
            setCookie("my_highscore",highscore.toString(),365);

        }

        if (highscore > 0) {
            //Display high score
            var highscore_label = this.game.add.text (x, y+50, 'High Score: '+ highscore, scorestyle);
            highscore_label.anchor.setTo(0.5, 0.5);
        }

        // Continue
        this.game.add.button(60,320,'continue',function(){
            this.game.state.start('play');
        }, this);

        // Copyright label
        var copyright_label = this.game.add.text (x, 390, '© 2014 Huang Geyang and Chen Lu', { font: "12px Arial", fill: "#ffffff" });
        copyright_label.anchor.setTo(0.5, 0.5);

    },

    update: function() {
    },

    toggle_sound: function() {
        if (this.sound_toggle.frame == 0) {
            this.sound_toggle.frame = 1;
            sound = false;
        }
        else {
            this.sound_toggle.frame = 0;
            sound = true;
        }
    }
};