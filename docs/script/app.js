import {goUp} from './modules/goUp.js';
import { menuHambuerger } from "./modules/menuHamburger.js";
import { renderProjectsGithub } from "./modules/renderProjectsGithub.js"

document.addEventListener("DOMContentLoaded", () => {
  renderProjectsGithub();
  goUp();
  menuHambuerger();
})