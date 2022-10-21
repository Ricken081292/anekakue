const burger = document.querySelector(".burger");
const bars = document.querySelectorAll("span");
const ul = document.querySelector("ul");
const links = document.querySelectorAll("li");
const buttons = document.querySelectorAll(".card button");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const cards = Array.from(document.querySelectorAll(".card .title"));

burger.addEventListener("click", showBar);

buttons.forEach((btn) => {
  if (btn.className == "show") {
    btn.addEventListener("click", function (e) {
      e.target.previousElementSibling.classList.toggle("show-desc");
      e.target.previousElementSibling.previousElementSibling.classList.toggle(
        "show-title"
      );
      e.target.firstElementChild.classList.toggle("rotate");
    });
  }
});

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    showBar();
    const id = this.firstElementChild.id;
    const section = document.querySelector(
      `${id === "top" ? "body#" : "section#"}${id}`
    );
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function showBar() {
  bars.forEach((bar) => {
    bar.classList.toggle("rotate");
  });
  ul.classList.toggle("display");
  links.forEach((link, i) => {
    const times = i / 5 + 0.5;
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linksFade 0.25s ease forwards ${times}s`;
    }
  });
}

window.addEventListener("scroll", function (e) {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");
    if ((top) => offset && top < offset + height) {
    }
  });
});

window.addEventListener("scroll", function () {
  let saatIni = window.scrollY;
  if (saatIni > 10) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

cards.map((card) => {
  const opt = document.createElement("option");
  const options = document.querySelector("select");
  opt.className = "option-order";
  opt.append(card.innerHTML);
  opt.value = card.innerHTML;
  options.append(opt);
  console.log(card.innerHTML);
});
