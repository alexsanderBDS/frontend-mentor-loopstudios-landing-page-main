const btnEl = document.querySelector(".btn");
const headerEl = document.querySelector(".header");
const imgEl = document.querySelector(".btn-img");
const linksEl = document.querySelectorAll("a:not(#fmentor):not(#github)");

window.addEventListener("load", () => {
  linksEl.forEach((a) => {
    a.setAttribute("target", "_blank");
    a.setAttribute(
      "href",
      "https://www.linkedin.com/in/alexsander-batista-dos-santos-1524278a/"
    );
  });
});

const imgSources = {
  btnClose: "images/icon-close.svg",
  btnMenu: "images/icon-hamburger.svg",
  srcAttr: "src",
  classTarget: "open",
};

btnEl.addEventListener("click", () => {
  const { btnMenu, btnClose, srcAttr, classTarget } = imgSources;
  if (!headerEl.classList.contains(classTarget)) {
    imgEl.setAttribute(srcAttr, btnClose);
    document.body.parentNode.classList.add("overflow");
    return headerEl.classList.add(classTarget);
  }

  imgEl.setAttribute(srcAttr, btnMenu);
  document.body.classList.remove("overflow");
  document.body.parentNode.classList.remove("overflow");
  return headerEl.classList.remove(classTarget);
});
