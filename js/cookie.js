/**
 * Created by Hosuke on 25/05/2014.
 * By Chen Reason
 * Modified by Hosuke
 */

//var maxgrade; maxgrade here is the highscore //最高分,你只要把下面三个函数里这个变量换成你自己的就行了。
//出现最高分时要把最高分写进cookie调用setCookie(my_maxgrade,maxgrade,expiredays);


function getCookie(my_maxgrade)//my_maxgrade为标识字符串
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(my_maxgrade + "=");
        if (c_start!=-1)
        {
            c_start=c_start + my_maxgrade.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1)
                c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
}

function setCookie(my_maxgrade,maxgrade,expiredays)//参数一:标识字符串，参数二：最高分变量，参数三：保留时间
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = my_maxgrade + "=" + escape(maxgrade) + ((expiredays == null) ? "" : "; expires="+exdate.toGMTString());
}

function checkCookie()
{
    highscore = parseInt(getCookie('my_highscore'));
    if(isNaN(highscore) == true)
    {
        highscore = 0;
    }
}



//网页载入之后调用checkCookie()
//需要写入cookie调用setCookie()
