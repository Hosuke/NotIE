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
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        // Background

        // Logo
        {
            var logo = this.game.add.text(w / 2, -170, 'NOT IE', { font: '50px Arial', fill: '#fff' });
            logo.anchor.setTo(0.5, 0.5);
            logo.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
            this.game.add.tween(logo).to({ y: h / 2 - 100 }, 1500, Phaser.Easing.Bounce.Out).start();
        }

        // Logo reflect
        {
            var logoreflect = this.game.add.text(w / 2, 410, "NOT IE", { font: '50px Arial', fill: '#fff' });

            //  Centers the text
            logoreflect.anchor.setTo(0.5, 0.5);
            logoreflect.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
            logoreflect.scale.y = -1;

            var grd = logoreflect.context.createLinearGradient(0, 0, 0, logo.canvas.height);

            //  Add in 2 color stops
            grd.addColorStop(0, 'rgba(255,255,255,0)');
            grd.addColorStop(1, 'rgba(255,255,255,0.08)');

            //  And apply to the Text
            logoreflect.fill = grd;

            this.game.add.tween(logoreflect).to({ y: 140 }, 1500, Phaser.Easing.Bounce.Out).start();
        }


        // Defining variables
        var style = { font: "25px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var helpertext = this.game.add.text(x, y-60, "Do not tap on IE", style);
        helpertext.anchor.setTo(0.5, 0.5);
        helpertext.alpha = 0;
        this.game.add.tween(helpertext).delay(500).to({ alpha: 1}, 500).start();

        // Adding a text centered on the screen
        var chinesetext = this.game.add.text(x, y-30, "不要点IE哟", style);
        chinesetext.anchor.setTo(0.5, 0.5);
        chinesetext.alpha = 0;
        this.game.add.tween(chinesetext).delay(500).to({ alpha: 1}, 500).start();


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
            score_label.alpha = 0;
            this.game.add.tween(score_label).delay(500).to({ alpha: 1}, 500).start();
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
            highscore_label.alpha = 0;
            this.game.add.tween(highscore_label).delay(500).to({ alpha: 1}, 500).start();
        }

        // Continue
        {
            var cont = this.game.add.button(60, 320, 'continue', function () {
                this.game.state.start('play');
            }, this);

            cont.alpha = 0;
            this.game.add.tween(cont).delay(500).to({ alpha: 1}, 500).start();
        }

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