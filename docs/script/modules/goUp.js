const d = document;

const goUp = () => {
  d.addEventListener("click" , (e) => e.target.matches('#iconUp') && window.scrollTo(0, 0))
}

export {goUp}