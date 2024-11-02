export const clearActive = () => {
  document
    .querySelectorAll("nav li")
    .forEach((li) => li.classList.remove("active"));
};

export const scrollToSection = (sectionClass, activeId) => {
  document
    .querySelector(`.${sectionClass}`)
    .scrollIntoView({ behavior: "smooth" });
  clearActive();
  document.querySelector(`#${activeId}`).classList.add("active");
};

export const toggleMenu = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("translate-y-[0]");
  nav.classList.toggle("bg-white");
  document.querySelectorAll(".line").forEach((line, index) => {
    line.classList.toggle(
      `rotate-[${index === 0 ? "45deg" : index === 1 ? "0" : "-45deg"}]`
    );
  });
};

export const handleScroll = () => {
  const nav = document.querySelector("nav");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      nav.style.transform = "translateY(-50%)";
    } else {
      nav.style.transform = "translateY(0%)";
    }
  };
};

export const initNavigation = () => {
  document.querySelectorAll("nav li").forEach((item) => {
    item.addEventListener("click", () => {
      const sectionClass = item.getAttribute("data-section");
      scrollToSection(sectionClass, item.id);
    });
  });
  handleScroll();
};

export const openModal = (src, desc) => {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = src;
  document.getElementById("modalDesc").textContent = desc;
};

export const closeModal = () => {
  document.getElementById("modal").classList.add("hidden");
};
