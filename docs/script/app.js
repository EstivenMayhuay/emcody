import { goUp } from './modules/goUp.js';
import { menuHambuerger } from "./modules/menuHamburger.js";
import { renderProjectsGithub } from "./modules/renderProjectsGithub.js"
import { sideBarPanel } from './modules/sideBarPanel.js';
import { storageSideBarPanel } from './modules/storageApp.js';

document.addEventListener("DOMContentLoaded", () => {
  storageSideBarPanel();
  if(document.getElementById('projects') != null) renderProjectsGithub();
  goUp();
  menuHambuerger();
  if(document.getElementById('panelInfo') != null) sideBarPanel();
})