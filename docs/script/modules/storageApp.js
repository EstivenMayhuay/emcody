const sidesPanel = [
  {
    id: 'html5-course',
    nav: [
      {
        summary: 'HTML5 Basico',
        list: [
          {
            title: 'Breve Historia',
            link: 'http://127.0.0.1:5500/docs/post/html5/breve-historia/index.html'
          },
          {
            title: '¿Que es HTML?',
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

const storeSidesPanel = () => {
  localStorage.setItem('sidesPanel', JSON.stringify(sidesPanel));
}

const getSidesPanel = () => {
  const sidesPanel = JSON.parse(localStorage.getItem('sidesPanel'));
  return sidesPanel;
}

const storeCurrentSidePanel = (objSidePanel) => {
  localStorage.setItem('currentSidePanel', JSON.stringify(objSidePanel));
}

const renderCurrentSidePanel = () => {
  if(JSON.parse(localStorage.getItem('currentSidePanel')) != null) {
    const currSidePanel = JSON.parse(localStorage.getItem('currentSidePanel'));
    const panelMenu = document.querySelector('.panelMenu');
    const fragment = document.createDocumentFragment();
    
    currSidePanel.nav.forEach(navItem => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      const ul = document.createElement('ul');
      
      summary.textContent = navItem.summary;
            
      navItem.list.map(list => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = list.link;
        a.textContent = list.title;
        
        li.appendChild(a);
        ul.appendChild(li);
      })

      details.appendChild(summary);
      details.appendChild(ul);
      fragment.appendChild(details);

      // events details
      details.addEventListener("click", () => {
        if(details.open === true) details.open = false;
        else details.open = true;
      })
    });

    if(panelMenu != null) panelMenu.appendChild(fragment);
  }
}

export {storeSidesPanel, getSidesPanel, storeCurrentSidePanel, renderCurrentSidePanel}