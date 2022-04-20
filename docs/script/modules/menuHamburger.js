
const menuHambuerger = () => {
  const d = document;
  
  d.addEventListener("click", (e) => {
    if(e.target.matches("#buttonMenu") || e.target.matches("#buttonMenu *")) {
      const hMenu = d.querySelector('.menu').offsetHeight;
      
      d.querySelector('#buttonMenu').classList.toggle('activeMenu');
      d.querySelector('.contentMenu').classList.toggle('activeContentMenu');

      d.querySelector('.contentMenu').style.transition = 'height 0.4s ease';

      !d.querySelector('.contentMenu').style.height || d.querySelector('.contentMenu').style.height == "0px" ? d.querySelector('.contentMenu').style.height = hMenu + 32 + 'px' : d.querySelector('.contentMenu').style.height = 0
    }
    else if (!e.target.matches('.contentMenu')) {
      d.querySelector('#buttonMenu').classList.remove('activeMenu');
      d.querySelector('.contentMenu').classList.remove('activeContentMenu');
      d.querySelector('.contentMenu').style.height = 0;
    }
  })
}

export {menuHambuerger}