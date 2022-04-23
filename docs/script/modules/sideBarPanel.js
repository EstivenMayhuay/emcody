const sideBarPanel = () => {
  const d = document;
  
  d.addEventListener("click", (e) => {
    const sideBarPanel = d.getElementById('panelInfo');
    const iconSideBar = d.getElementById('iconSideBar').id;

    // show and hide the sideBarPanel
    if(e.target.matches(`#${iconSideBar}`) || e.target.matches(`#${panelInfo.id} *`)) {
      sideBarPanel.style.transform = 'translate(0, 0)';
    } else if(!e.target.matches(`#${panelInfo.id}`)) {
      sideBarPanel.style.transform = 'translate(-100%, 0)';
    }
  })
}

export { sideBarPanel };