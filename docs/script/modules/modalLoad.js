const modalLoad = () => {
  setTimeout(() => {
    document.getElementById("modalLoadInfo").style.display = "flex";
  }, 3000);

  document.getElementById("modalLoadInfo").style.display = "none";
};

export { modalLoad };
