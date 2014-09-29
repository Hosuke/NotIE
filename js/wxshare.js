/**
 * Created by Hosuke on 29/09/2014.
 */
var os="pc";
var uid="0";

window.onload=function()
{
    document.getElementById('sharebt').className="sharebt";
};

function shareWx()
{
    share = true;
    if(uid<1)
    {
        wShare();
    }else{
        if(os=='ios')
        {
            IosShareToWX(1);
        }else if(os=='android'){
            AndriodShareToWX(0);

        }
    }
}

function wShare()
{
    document.getElementById("sbg").className="sbgshow";
}

(function () {
    var onBridgeReady = function () {
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid":		"",
                "img_url":		"http://hosuke.github.io/NotIE/icon.png",
                "img_width":	"80",
                "img_height":	"80",
                "link":				"http://hosuke.github.io/NotIE/",
                "desc":				"",
                "title":			"我在 NOT IE 里玩了"+score.toString()+"分，你能得多少分呢？"
            }, function(){});
        });

        // 分享到朋友圈;
        //TODO
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "http://hosuke.github.io/NotIE/icon.png",
                "img_width": "80",
                "img_height": "80",
                "link": "http://hosuke.github.io/NotIE/",
                "desc": "",
                "title": "我在 NOT IE 里玩了"+score.toString()+"分，你能得多少分呢？"
            }, function () { });
        });
    }


    //
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();