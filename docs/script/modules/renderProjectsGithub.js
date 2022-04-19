const fetchGithub = async () => {
  const res = await fetch("https://api.github.com/users/EstivenMayhuay");
  const data = await res.json();
  const resRepos = await fetch(data.repos_url);
  const dataRepos = await resRepos.json();
  const repos = [];
  
  dataRepos.forEach(dataRepo =>  {
    repos.push({
      name: dataRepo.name,
      description: dataRepo.description,
      language: dataRepo.language,
      homepage: dataRepo.homepage,
      site: dataRepo.html_url,
      owner: dataRepo.owner.login,
      topics: dataRepo.topics
    })
  })
  return repos
}

const createElementsCards = async () => {
  const repos =  await fetchGithub();
  const fragment = document.createDocumentFragment();

  repos.slice(-8).forEach(repo => {
    const cardProject = document.createElement('div');
    const listLanguages = document.createElement('ul');
    const divTopics = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const linkSite = document.createElement('a');
    const linkLive = document.createElement('a');

    h4.textContent = repo.name;
    p.textContent = repo.description.slice(0, 80)+ "...";
    linkSite.innerHTML = `<i class='bx bxl-github'></i> Repositorio`;
    linkSite.href = repo.site;
    linkLive.innerHTML = `<i class='bx bx-window-open'></i> Live`;
    linkLive.href = repo.homepage;

    cardProject.setAttribute("class", "cardProject")

    cardProject.appendChild(h4);
    cardProject.appendChild(p);

    if(repo.topics.length > 0) { 
      listLanguages.innerHTML = repo.topics.slice(0, 3).join(" ");
      cardProject.appendChild(listLanguages); 
    }

    cardProject.appendChild(linkSite);
    cardProject.appendChild(linkLive);

    cardProject.style.width = '280px';
    cardProject.style.height = '100%';
    cardProject.style.margin = 'auto';

    fragment.appendChild(cardProject);
  })

  return fragment;
}

const renderProjectsGithub = async () => {
  const contentProjects = document.getElementById('projects');
  contentProjects.appendChild(await createElementsCards());
}

export {renderProjectsGithub}