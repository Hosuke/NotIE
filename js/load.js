/**
 * Created by Hosuke on 25/04/2014.
 */
var load_state = {
    preload: function() {
        this.game.stage.backgroundColor = '#323A45';
        this.game.load.image('black','assets/black70.png');
        this.game.load.image('white','assets/white70.png');
        this.game.load.image('ie','assets/ie.png');
        this.game.load.image('chrome','assets/chrome.png');
        this.game.load.image('opera','assets/opera.png');
        this.game.load.image('firefox','assets/firefox.png');
        this.game.load.image('safari','assets/safari.png');

    },

    create: function() {
        this.game.state.start('menu');
    }
};
