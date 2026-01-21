function setLang(lang) {
  document.querySelectorAll("[data-th]").forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}
