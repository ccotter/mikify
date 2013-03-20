
(function(){

var Mike =
    '<li><a href="/activities/23650703" class="avatar medium">' +
    '<img alt="michael reyna" class=" tipsy-enabled" ' +
    'src="http://dgalywyr863hv.cloudfront.net/pictures/athletes/255312/' + 
    '73812/1/medium.jpg" original-title="michael reyna"></a></li>';

$ = jQuery;

var others = $(".details > a");
var n = parseInt(others.get()[0].innerHTML.split(" ")[0]);
others.get()[0].innerHTML = (n+10)  + " others";

others.bind("click", function() {
    console.log("Here");
    var node = $("body div.ui-dialog ul").get();
    console.log(node.innerHTML);
    for (var i = 0; i < 10; ++i)
        node.innerHTML += Mike;
});

})();
