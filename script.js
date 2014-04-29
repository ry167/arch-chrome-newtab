//Arch Page Code
var search = document.getElementsByTagName("form")[0];
search.onsubmit = function(){
    console.log("firing");
    var searchEngine = document.getElementsByName("searchEngine");
    for (var i = 0;i < searchEngine.length;i++){
        if (searchEngine[i].checked) var searchEngineSelected = searchEngine[i].value;
    }
    
    var searchTerm = encodeURIComponent(document.getElementById("searchTerm").value);
    
    if (searchEngineSelected == "google"){
        window.location = "https://www.google.com/search?q=" + searchTerm;
    }
    else if (searchEngineSelected == "duckduckgo"){
        window.location = "https://duckduckgo.com/?q=" + searchTerm;
    }
    else if (searchEngineSelected == "aur"){
        window.location = "https://aur.archlinux.org/packages/?O=0&K=" + searchTerm;
    }
    else if (searchEngineSelected == "archwiki"){
        window.location = "https://wiki.archlinux.org/index.php?title=Special:Search&search=" + searchTerm;
    }
    else if(searchEngineSelected == "devdocs"){
        window.location = "http://devdocs.io/#q=" + searchTerm;
    }
    
    return false;
}


document.onkeydown = function(evt){
    evt = evt || window.event;
    console.log(evt);
    if (evt.ctrlKey === true && evt.which == 72) {
        //h
        document.getElementById("s1").checked = true;
        evt.preventDefault();
        return false;
    }
    if (evt.ctrlKey === true && evt.which == 74) {
        //j
        document.getElementById("s2").checked = true;
        evt.preventDefault();
        return false;
    }
    if (evt.ctrlKey === true && evt.which == 75) {
        //k
        document.getElementById("s3").checked = true;
        evt.preventDefault();
        return false;
    }
    if (evt.ctrlKey === true && evt.which == 76) {
        //l
        document.getElementById("s4").checked = true;
        evt.preventDefault();
        return false;
    }
}



//Twitter Widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
	(document,"script","twitter-wjs");

