var infiscroll=true;
var t;
var element = window.location.origin === 'https://docs.google.com' ? document.querySelector('.kix-appview-editor') : window
function addScroll(add){
  var scrollTop = (element.pageYOffset !== undefined) ? element.pageYOffset : (element || document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(scrollTop)
  element.scroll(0,scrollTop+add)
}
function autoScroll(frequency, increment){
  addScroll(increment);
  t = setTimeout(function() {
    autoScroll(frequency, increment)
  }, frequency);
}
