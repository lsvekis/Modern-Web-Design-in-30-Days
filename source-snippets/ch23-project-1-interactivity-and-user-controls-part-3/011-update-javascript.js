function updateActiveButton(activeButton) {
  buttons.forEach(btn => btn.classList.remove("active"));
  activeButton.classList.add("active");
}
