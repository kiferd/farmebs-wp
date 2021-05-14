function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];

        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

if(readCookie('cookie-notice-dismissed')=='true') {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    {% include analytics.js %}

} else {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('cookie-notice-accept').addEventListener("click",function() {
    createCookie('cookie-notice-dismissed','true',31);
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    location.reload();

});

// REF: https://www.coraliecollignon.com/jekyll/2020/10/22/google-analytics.html