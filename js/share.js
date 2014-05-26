function share(sType){
	var sName = "NOT IE";
	var  title='Hosuke',
    _wset = 320,
    _hset = 400,
    _w = 320,
    _h = 400,
    _strGamePic="assets/ie.png";

	var en=encodeURIComponent;
	var l=document.location.href;
	l = l.replace(/_\d{1,}\.htm/,".htm",l);
	if (l.indexOf('#')>0){
		l = l.substring(0, l.indexOf('#'));
	}
	var i = l.indexOf("/",8);
	var strHost = l.substring(0,i);
	if (strHost!="http://git.io/notie"){
		l = "http://git.io/notie" + l.substr(i);
	}

	var t=sName;
	var s=screen;
	var sImgUrl=_strGamePic;
	var sContent=['我在 NOT IE 里玩了',score.toString(),'分，你能得多少分呢？ 现在就来挑战一下吧！http://git.io/notie'].join('');
    var sContentEN=['I scored ',score.toString(),' points in NOT IE! Can you beat me?'].join('');
	var sUrl='http://git.io/notie';
	var w=600;
	var h=500;
	var statFlag='';
	if (sType=='xlwb')
	{
		sUrl=['http://v.t.sina.com.cn/share/share.php?c=&url=',en(l),'&title=',en(sContent),'&content=utf8&pic=',en(sImgUrl)].join('');
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
		sUrl=['https://twitter.com/intent/tweet?original_referer=',en('http://git.io/notie'),'&url=',en(l),'&text=',en(sContentEN),'&via=',en('HuangGeyang'),'&hashtags=',en('NOTIE'),'&pic=',en(sImgUrl)].join('');
		w=700;
		h=470;
		statFlag='tqq';
	}
	else if (sType=='facebook')
	{
		sUrl=['http://www.facebook.com/share.php?u=',en(l),'&description=',en(sContentEN),'&pic=',en(sImgUrl)].join('');
		w=700;
		h=470;
		statFlag='tqq';
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