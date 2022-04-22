const sidePanel = [
  {
    id: 'html5-course',
    nav: [
      {
        summary: 'HTML5 Basico',
        list: [
          {
            title: 'Breve Historia',
            link: 'http://127.0.0.1:5500/docs/post/html5/breve-historia/index.html'
          }
        ]
      }, 
      {
        summary: 'Tags HTML',
        list: [
          {
            title: 'Emcabezados',
            link: 'http://127.0.0.1:5500/docs/post/html5/breve-historia/index.html'
          }
        ]
      }
    ]
  },
  {
    id: 'css3-course',
    nav: [
      {
        summary: 'Fundamenetos CSS',
        list: [
          {
            title: '¿Que es CSS?',
            link: 'https://github.com'
          }
        ]
      }
    ]
  }
];

const storageSideBarPanel = () => {
  console.log('save nav in storage');
  localStorage.setItem('sidePanel', JSON.stringify(sidePanel));
}

const getSidePanelById = (id) => {
  const sidesPanel = JSON.parse(localStorage.getItem('sidePanel'));
  const sidePanelFound = sidesPanel.find(sidePanel => sidePanel.id === id);
  return sidePanelFound;
}

export {storageSideBarPanel, getSidePanelById}