/** 
  This script will inject the global header into the global page header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Edwin\'s Site</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/figueroa-clara/home.html">Home</a></li><li><a href="#">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="#">Project Cars<ul><li><a href="#">Car 1</a></li><li><a href="#">Car 2</a></li><li><a href="#">Car 3</a></li></ul></li><li><a href="#">Calculator Club</a><ul><li><a href="#">Calc 1</a></li><li><a href="#">Calc 2</a></li><li><a href="#">Calc 3</a></li></ul></li><li><a href="/figueroa-clara/web-dev">Web Development</a><ul><li><a href="wdsub/week1.html">Week 1</a></li><li><a href="wdsub/recipe.html">Week 2</a></li><li><a href="wdsub/anchors.html">Week 3</a></li><li><a href="wdsub/poem.html">Week 4</a></li><li><a href="wdsub/review.html">Week 5</a></li><li><a href="wdsub/journal.html">Week 6</a></li><li><a href="wdsub/band-page.html">Week 7</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
