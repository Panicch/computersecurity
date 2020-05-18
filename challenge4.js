function getcookie() {
    var name = "secret" + "=";
    var decodedcookie = document.cookie;
    var ca = decodedcookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            param = c.substring(name.length, c.length);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://chall.necst.it/challenges/web4/verify/1869/" + param, false );
            xmlHttp.send( null );
            return xmlHttp.responseText;
        }
    }
}
