const d = document;

const menuHambuerger = () => {
  d.addEventListener("click", (e) => {
    if(e.target.matches("#buttonMenu") || e.target.matches("#buttonMenu *")) {
      d.querySelector('#buttonMenu').classList.toggle('activeMenu')
    }
  })
}

export {menuHambuerger}