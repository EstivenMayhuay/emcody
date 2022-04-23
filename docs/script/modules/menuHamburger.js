import { getSidesPanel, storeCurrentSidePanel } from "./storageApp.js";

const matchSidePanelByCourse = (element) => {
    const sidesPanel = getSidesPanel();
    
    if(element.matches('#home')) window.location = "http://127.0.0.1:5500/docs/index.html";
    else if(element.matches('#html5-course')) {
      storeCurrentSidePanel(sidesPanel.find(sidePanel => sidePanel.id === element.id));
      window.location = "http://127.0.0.1:5500/docs/post/html5/index.html";
    } else if (element.matches('#css3-course')) {
      storeCurrentSidePanel(sidesPanel.find(sidePanel => sidePanel.id === element.id));
      window.location = "http://127.0.0.1:5500/docs/post/css3/index.html";
    }
}

const menuHambuerger = () => {
  const d = document;
  
  d.addEventListener("click", (e) => {
    e.preventDefault();

    matchSidePanelByCourse(e.target);

    // show and hide the main menu
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