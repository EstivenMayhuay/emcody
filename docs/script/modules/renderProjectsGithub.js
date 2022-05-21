const fetchGithub = async () => {
  const res = await fetch("https://api.github.com/users/EstivenMayhuay");
  const data = await res.json();
  const resRepos = await fetch(data.repos_url);
  const dataRepos = await resRepos.json();
  const repos = [];

  dataRepos.forEach((dataRepo) => {
    repos.push({
      name: dataRepo.name,
      description: dataRepo.description,
      language: dataRepo.language,
      homepage: dataRepo.homepage,
      site: dataRepo.html_url,
      owner: dataRepo.owner.login,
      topics: dataRepo.topics,
    });
  });

  return repos;
};

const createElementsCards = async () => {
  const repos = await fetchGithub();
  const fragment = document.createDocumentFragment();

  repos.slice(-12).forEach((repo) => {
    const cardProject = document.createElement("div");
    const divTopics = document.createElement("ul");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const linkSite = document.createElement("a");
    const linkLive = document.createElement("a");

    h4.textContent = repo.name;
    p.textContent = repo.description.slice(0, 50) + "...";
    linkSite.innerHTML = `<i class='bx bxl-github'></i> Repositorio`;
    linkSite.href = repo.site;
    linkSite.target = "_blank";
    linkLive.innerHTML = `<i class='bx bx-window-open'></i> Ver Sitio`;
    linkLive.href = repo.homepage;
    linkLive.target = "_blank";

    linkSite.setAttribute("class", "btnRepositorie");
    linkLive.setAttribute("class", "btnLiveSite");
    divTopics.setAttribute("class", "cardProject__topics");
    cardProject.setAttribute("class", "cardProject");

    cardProject.appendChild(h4);
    cardProject.appendChild(p);
    if (repo.topics.length > 0) {
      const repoFormat = repo.topics.slice(0, 3);
      repoFormat.forEach((topic) => {
        divTopics.innerHTML += `<li>${topic}</li>`;
      });
      cardProject.appendChild(divTopics);
    }
    cardProject.appendChild(linkSite);
    cardProject.appendChild(linkLive);
    fragment.appendChild(cardProject);
  });

  return fragment;
};

const renderProjectsGithub = async () =>
  document.getElementById("projects").appendChild(await createElementsCards());

export { renderProjectsGithub };
