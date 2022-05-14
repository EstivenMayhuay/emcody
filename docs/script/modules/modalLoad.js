const modalLoad = () => {
  setTimeout(() => {
    document.getElementById("modalLoadInfo").style.display = "flex";
  }, 2000);

  document.getElementById("modalLoadInfo").style.display = "none";
};

export { modalLoad };
