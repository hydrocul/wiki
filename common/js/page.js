if(location.host == 'hydrocul.github.com' || location.host == 'hydrocul.github.io'){

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-5853773-6']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

}

$(function() {
  $("a.unicode-char").each(function() {
    var t = $(this);
    var code = t.text();
    t.html("&#x" + code + ";");
    t.attr("href", "http://unicode-table.com/en/" + code + "/");
    t.attr("target", "_blank");
  });
});

