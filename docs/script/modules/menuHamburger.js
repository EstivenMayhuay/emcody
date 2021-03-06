const menuHambuerger = () => {
  const d = document;

  d.addEventListener("click", (e) => {
    // show and hide the main menu
    if (e.target.matches("#buttonMenu") || e.target.matches("#buttonMenu *")) {
      const hMenu = d.querySelector(".menu").offsetHeight;

      d.querySelector("#buttonMenu").classList.toggle("activeMenu");
      d.querySelector(".contentMenu").classList.toggle("activeContentMenu");

      d.querySelector(".contentMenu").style.transition = "height 0.4s ease";

      !d.querySelector(".contentMenu").style.height ||
      d.querySelector(".contentMenu").style.height == "0px"
        ? (d.querySelector(".contentMenu").style.height = hMenu + 32 + "px")
        : (d.querySelector(".contentMenu").style.height = 0);
    }
  });
};

export { menuHambuerger };
