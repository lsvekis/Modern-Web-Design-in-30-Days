buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;
    handleFilter(filter);
  });
});
