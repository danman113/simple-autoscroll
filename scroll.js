var scrolling = false
function click(e) {
  scrolling = true
  chrome.browserAction.setIcon({ path: 'green.png' }, () => {
    var sec = document.getElementById('seconds').value
    var scroll = document.getElementById('scroll').value

    chrome.tabs.executeScript(null, {
      code: "clearTimeout(t);console.log('Stopped');",
    })

    chrome.tabs.executeScript(null, {
      code:
        "var t;console.log('Scroll " +
        scroll +
        ' px every ' +
        sec +
        " milliseconds');function addscroll(e){var t=window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;scroll(0,t+e)}function autoscroll(e,n){addscroll(n);t=setTimeout(function(){autoscroll(e,n)},e)}var infiscroll=true;var t;autoscroll(" +
        sec +
        ',' +
        scroll +
        ');',
    })

    window.close()
  })
}

function stop() {
  chrome.browserAction.setIcon({ path: 'icon.png' })
  chrome.tabs.executeScript(null, {
    code: "clearTimeout(t);console.log('Stopped');",
  })
}

function saveDefault() {
  const seconds = +document.getElementById('seconds').value
  const scroll = +document.getElementById('scroll').value
  document.getElementById('saved').innerHTML = `Saved &#10003;`

  localStorage.setItem('scroll', scroll)
  localStorage.setItem('seconds', seconds)
}

document.addEventListener('DOMContentLoaded', function() {
  stop()
  const scroll = +localStorage.getItem('scroll') || 5
  const seconds = +localStorage.getItem('seconds') || 25

  document.getElementById('seconds').value = seconds
  document.getElementById('scroll').value = scroll

  document.getElementById('go').addEventListener('click', click)
  document.getElementById('default').addEventListener('click', saveDefault)
})
