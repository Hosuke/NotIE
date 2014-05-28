function share(sType){
	var sName = "NOT IE";
	var  title='Hosuke',
    _wset = 320,
    _hset = 400,
    _w = 320,
    _h = 400,
    _strGamePic="http://hosuke.github.io/NotIE/assets/screenshot.PNG";

	var en=encodeURIComponent;
	var l=document.location.href;
	l = l.replace(/_\d{1,}\.htm/,".htm",l);
	if (l.indexOf('#')>0){
		l = l.substring(0, l.indexOf('#'));
	}
	var i = l.indexOf("/",8);
	var strHost = l.substring(0,i);
	if (strHost!="http://hosuke.github.io/NotIE"){
		l = "http://hosuke.github.io/NotIE" + l.substr(i);
	}

	var t=sName;
	var s=screen;
	var sImgUrl=_strGamePic;
	var sContent=['我在 NOT IE 里玩了',score.toString(),'分，你能得多少分呢？ 现在就来挑战一下吧！http://hosuke.github.io/NotIE/ @Hosuke'].join('');
    var sContentEN=['I scored ',score.toString(),' points in NOT IE! Can you beat me?'].join('');
    var fbContent = 'I%20scored%20'+score.toString()+'%20in%20NOT%20IE%20!%20Can%20you%20beat%20me%3F';
	var sUrl='http://hosuke.github.io/NotIE/';
	var w=600;
	var h=500;
	var statFlag='';
	if (sType=='xlwb')
	{
		sUrl=['http://v.t.sina.com.cn/share/share.php?c=&url=http%3A%2F%2Fhosuke.github.io%2FNotIE&title=',en(sContent),'&content=utf8&pic=',en(sImgUrl)].join('');
		w=610;
		h=570;
		statFlag='tsina';
	}
	else if (sType=='txwb')
	{
		sUrl=['http://v.t.qq.com/share/share.php?site=',en('http://git.io/notie'),'&url=',en(l),'&title=',en(sContent),'&pic=',en(sImgUrl)].join('');
		w=700;
		h=470;
		statFlag='tqq';
	}
	else if (sType=='twitter')
	{
		sUrl=['https://twitter.com/intent/tweet?original_referer=',en('http://hosuke.github.io/NotIE/'),'&url=',en(l),'&text=',en(sContentEN),'&via=',en('HuangGeyang'),'&hashtags=',en('NOTIE'),'&pic=',en(sImgUrl)].join('');
		w=700;
		h=470;
		statFlag='tqq';
	}
	else if (sType=='facebook')
	{
//		sUrl="http://www.facebook.com/share.php?u=http%3A%2F%2Fgit.io%2Fnotie&name=I%20scored%20"+score.toString()+"%20in%20NOT%20IE%20!%20Can%20you%20beat%20me%3F";
		sUrl="https://www.facebook.com/dialog/feed?app_id=402368753236795&description=Do%20not%20tap%20on%20IE&display=popup&e2e=%7B%7D"
            +"&link=http%3A%2F%2Fhosuke.github.io%2FNotIE"+"&locale=en_GB&name=I%20scored%20"
            +score.toString()
            +"%20in%20NOT%20IE%20!%20Can%20you%20beat%20me%3F"
            +"&next=http%3A%2F%2Fhosuke.github.io%2FNotIE"
            +"&picture=http%3A%2F%2Fhosuke.github.io%2FNotIE%2Fassets%2Fscreenshot.PNG"
            +"&sdk=joey";
        w=700;
		h=470;
		statFlag='tqq';
	}
    else if (sType == 'renren')
    {
        sUrl="http://widget.renren.com/dialog/share?"
            +"resourceUrl=http%3A%2F%2Fhosuke.github.io%2FNotIE"
            +"&title=我在NOT%20IE中得了"
            +score.toString()
            +"分，来比比吧！"
            +"&description=山无棱%20天地合%20才敢用IE"
            +"&images=http%3A%2F%2Fhosuke.github.io%2FNotIE%2Fassets%2Fscreenshot.PNG"
            +"&charset=utf-8";
        w=700;
        h=470;
    }

	x=function()
	{
		if(!window.open(sUrl, sType, ['toolbar=0,resizable=1,status=0,width=',w,',height=',h,',left=',(s.width-w)/2,',top=',(s.height-h)/2].join('')))
		{
			location.href=sUrl;
		}
	}
	if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0);}else{x();}

}