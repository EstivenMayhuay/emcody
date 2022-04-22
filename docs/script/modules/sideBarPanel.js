const sideBarPanel = () => {
  const d = document;
  
  d.addEventListener("click", (e) => {
    const sideBarPanel = d.getElementById('panelInfo');
    if(e.target.matches('#buttonUp') || e.target.matches('#buttonUp *')) {
      sideBarPanel.style.transform = 'translate(0, 0)';
    } else if(!e.target.matches('#panelInfo') && !e.target.matches('.panelMenu *')) {
      console.log(e.target);
      sideBarPanel.style.transform = 'translate(-100%, 0)';
    }
  })
}

export { sideBarPanel };