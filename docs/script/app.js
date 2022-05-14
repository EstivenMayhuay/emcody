import { goUp } from "./modules/goUp.js";
import { menuHambuerger } from "./modules/menuHamburger.js";
import { modalLoad } from "./modules/modalLoad.js";
import { renderProjectsGithub } from "./modules/renderProjectsGithub.js";
import { sideBarPanel } from "./modules/sideBarPanel.js";

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("projects") != null) renderProjectsGithub();
  goUp();
  menuHambuerger();
  if (document.getElementById("panelInfo") != null) sideBarPanel();
  modalLoad();
});
