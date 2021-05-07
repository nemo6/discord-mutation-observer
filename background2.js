const DEL_SELECTOR = '.wrapper-1BJsBx'

const mo = new MutationObserver(onMutation)
// in case the content script was injected after the page is partially loaded
onMutation([{addedNodes: [document.documentElement]}])
observe()

function onMutation(mutations) {
  const toRemove = [];
  for (const {addedNodes} of mutations) {
    for (const n of addedNodes) {
      if (n.tagName) {
        if (n.matches(DEL_SELECTOR)) {

          // toRemove.push(n);

        } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {

        if ( n.querySelectorAll(DEL_SELECTOR)[0].ariaLabel == " Café Des Devs" ){
          
          console.log(n.querySelectorAll(DEL_SELECTOR)[0].ariaLabel)

          toRemove.push(n.querySelectorAll(DEL_SELECTOR)[0].parentElement.parentElement.parentElement.parentElement.parentElement)

          }

        }
      }
    }
  }
  if (toRemove.length) {
    mo.disconnect()
    for (const el of toRemove) el.style.display = "none" // el.style.display = "none" el.remove()
    observe()
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  })
}
