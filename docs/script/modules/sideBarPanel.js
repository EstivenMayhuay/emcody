import { getSidePanelById } from "./storageApp.js";

const sideBarPanel = () => {
  const d = document;
  
  d.addEventListener("click", (e) => {
    e.preventDefault();
    const sideBarPanel = d.getElementById('panelInfo');
    const iconSideBar = d.getElementById('iconSideBar').id;

    if(e.target.matches('#html5-course')) {
      const navFound = getSidePanelById(e.target.id);
      console.log(navFound);
      sideBarPanel.innerHTML = `
        <h4>${navFound.id}</h4>
      `;
    } else if (e.target.matches("#css3-course")) {
    }

    // show and hide the sideBarPanel
    if(e.target.matches(`#${iconSideBar}`) || e.target.matches(`#${panelInfo.id} *`)) {
      sideBarPanel.style.transform = 'translate(0, 0)';
    } else if(!e.target.matches(`#${panelInfo.id}`)) {
      sideBarPanel.style.transform = 'translate(-100%, 0)';
    }
  })
}

export { sideBarPanel };