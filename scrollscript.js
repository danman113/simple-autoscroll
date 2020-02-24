var infiscroll=true;
var t;
function addscroll(add){
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
scroll(0,scrollTop+add)
}
function autoscroll(frequency , incriment){
addscroll(incriment);
t=setTimeout(function(){autoscroll(frequency,incriment)},frequency);
}

