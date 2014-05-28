/**
 * Created by Hosuke on 22/05/2014.
 * Copyright 2014 Huang Geyang and He Yunen
 */
var play_state = {

    // No more 'preload' function, since it is already done in the 'load' state

    create: function() {
        score = 0;

        // preload sound effects
        this.iese = this.game.add.audio('iese');
        this.browserse = this.game.add.audio('browserse');
        this.bonusse = this.game.add.audio('bonusse');
        this.dogese = this.game.add.audio('dogese');

        var style = { font: "30px Arial", fill: "#ffffff" };
        this.scoretext =  this.game.add.text(40, 40, score, { font: "30px Arial", fill: "#ffffff" });
        this.scoretext.anchor.setTo(0.5, 0.5);
        this.scoretext.setText(score);

        this.startTime = Math.floor(this.game.time.time);
        this.timetext = this.game.add.text(260, 40, 0, { font: "30px Arial", fill: "#ffffff" });
        this.timetext.anchor.setTo(0.5, 0.5);
        this.timelimit = 30;

        this.blackcount = 0;

        //Create a group of tile
        this.tiles = this.game.add.group();
        var tile;
        for (var x = 0; x < 4; x++)
        {
            for (var y = 0; y < 4; y++)
            {
                var r = Math.random();
                if (r > 0.3) {
                    tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'ie', x + 4 * y);
                    tile.color = 0;
                } else {
                    var r2 = Math.random();
                    if (r2 < 0.25) {
                        tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'chrome', x + 4 * y);
                    } else if (r2 < 0.5){
                        tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'firefox', x + 4 * y);
                    } else if (r2 < 0.75){
                        tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'opera', x + 4 * y);
                    } else if (r2 < 0.99){
                        tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'safari', x + 4 * y);
                    } else {
                        tile = this.tiles.create(12 + 75 * x, 80 + 75 * y, 'doge', x + 4 * y);
                        tile.isDoge = 1;
                    }
                    tile.color = 1;
                    this.blackcount += 1;
                }
                if (x==3 && y==3 && this.blackcount == 0) {
                    tile.loadTexture('chrome', 0);
                    tile.color = 1;
                    this.blackcount += 1;
                }
                tile.id = x+4*y;
                tile.inputEnabled = true;
                tile.events.onInputUp.add(this.change, this);
                //tile.events.onPointerDown.add(this.change);
            }
        }

        // Explosion
        this.explosion = game.add.emitter(0, 0, 50);
        this.explosion.makeParticles('pixel');
        this.explosion.setYSpeed(-300, 300);
        this.explosion.setXSpeed(-300, 300);
        this.explosion.gravity = 0;
    },

    update: function() {
        // update game time
        {
            this.currentTime = Math.floor(this.game.time.time) - this.startTime;
            this.currentTime = this.currentTime / 1000;
            this.timeleft = this.timelimit - this.currentTime;
            this.timeleft = this.timeleft.toFixed(2);
            this.timetext.setText(this.timeleft + 's');
            if (this.timeleft < 5){
                this.timetext.fill = '#ff4136';
            }
            if (this.timeleft < 0){
                this.gameOver();
            }
        }
        if (this.blackcount == 0){
            this.newblacktiles();

            // Bonus time limit
            this.timelimit += 0.3;
            if (sound) this.bonusse.play();

            // Bonus time animation
            var bonus_style = { font: "30px Arial", fill: "#ff851b" };
            var bonustext = game.add.text(180,40,'+0.3s',bonus_style);
            bonustext.anchor.setTo(0.5, 0.5);
            bonustext.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
            this.game.add.tween(bonustext).to({ y: -50 }, 1000, Phaser.Easing.Cubic.Out, true).start();
        }
    },

    newblacktiles: function(){
        this.blackcount = 0;
        var tile;
        for (var x = 0; x < 4; x++){
            for (var y = 0; y < 4; y++){
                var r = Math.random();
                if (r < 0.3){
                    tile = this.tiles.getAt(x+4*y);
                    tile.isDoge = 0;
                    var r2 = Math.random();
                    if (r2 < 0.25) {
                        tile.loadTexture('chrome', 0);
                    } else if (r2 < 0.5){
                        tile.loadTexture('firefox', 0);
                    } else if (r2 < 0.75){
                        tile.loadTexture('opera', 0);
                    } else if (r2 < 0.99){
                        tile.loadTexture('safari', 0);
                    } else {
                        tile.loadTexture('doge', 0);
                        tile.isDoge = 1;
                    }
                    tile.color = 1;
                    this.blackcount += 1;
                }
                if (x==3 && y==3 && this.blackcount == 0) {
                    tile.loadTexture('chrome', 0);
                    tile.color = 1;
                    this.blackcount += 1;
                }
            }
        }
    },

    gameOver: function(){
        this.game.time.events.remove(this.timer);
        this.game.state.start('win');
    },

    //TODO: Game Lost
    gameLost:function(){
        this.game.time.events.remove(this.timer);
        this.game.state.start('lost');
    },

    change: function(tile) {
        if (tile.color == 0){
            if (sound) this.iese.play();
            //TODO: Game Lose
            this.gameLost();
        } else {
            // change into ie
            tile.loadTexture('ie', 0);
            tile.color = 0;
            this.blackcount -= 1;
            score += 1;

            // explode
            this.explosion.x = tile.x + 35;
            this.explosion.y = tile.y + 35;
            this.explosion.start(true, 150, null, 15);

            // Doge Bonus
            if (tile.isDoge == 1) {
                if (sound) this.dogese.play();
                score += 9;
            } else {
                if (sound) this.browserse.play();
            }

            this.scoretext.setText(score);
        }
    }

};