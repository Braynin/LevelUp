export default function addScrollClass(elementId, scrollThreshold) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`El elemento con ID '${elementId}' no fue encontrado.`);
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollThreshold) {
      element.classList.add("bg-white", "shadow-md");
    } else {
      element.classList.remove("bg-white", "shadow-md");
    }
  });
}
