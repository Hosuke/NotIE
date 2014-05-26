/**
 * Created by Hosuke on 25/04/2014.
 *  * Copyright 2014 Huang Geyang
 */
var boot_state = {
    preload: function () {
        this.game.stage.backgroundColor = '#323A45';
        this.game.load.image('loading', 'assets/loading.png');
        this.game.load.image('loading2', 'assets/loading2.png');
    },
    create: function() {
        this.game.state.start('load');
    }
};

var load_state = {
    preload: function() {

        var w = 320;
        var h = 400;
        label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#fff' });
        label2.anchor.setTo(0.5, 0.5);

        preloading2 = game.add.sprite(w/2, h/2+15, 'loading2');
        preloading2.x -= preloading2.width/2;
        preloading = game.add.sprite(w/2, h/2+19, 'loading');
        preloading.x -= preloading.width/2;
        game.load.setPreloadSprite(preloading);


        this.game.stage.backgroundColor = '#323A45';
        this.game.load.image('black','assets/black70.png');
        this.game.load.image('white','assets/white70.png');
        this.game.load.image('ie','assets/ie.png');
        this.game.load.image('chrome','assets/chrome.png');
        this.game.load.image('opera','assets/opera.png');
        this.game.load.image('firefox','assets/firefox.png');
        this.game.load.image('safari','assets/safari.png');
        this.game.load.image('doge','assets/dogemodified.png');

        this.game.load.image('continue','assets/continue.png');
        this.game.load.image('gameover','assets/gameover.png');
        this.game.load.image('weibo','assets/weibo5050white.png');
        this.game.load.image('twitter','assets/twitter5050white.png');

        this.game.load.audio('iese','assets/Laser_Shoot8.wav');
        this.game.load.audio('browserse','assets/Pickup_Coin14.wav');
        this.game.load.audio('bonusse','assets/Powerup19.wav');
        this.game.load.audio('dogese','assets/Powerup35.wav');

        // Load high score from cookie
        checkCookie();


    },

    create: function() {
        this.game.state.start('menu');
    }
};
