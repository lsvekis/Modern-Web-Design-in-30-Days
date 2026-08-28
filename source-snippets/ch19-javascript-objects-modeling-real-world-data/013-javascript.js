students.forEach(function (student) {
  const li = document.createElement("li");
  li.textContent = student.name + " — " + student.level;
  list.appendChild(li);
});
