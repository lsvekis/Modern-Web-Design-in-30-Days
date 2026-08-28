const skills = ["HTML", "CSS", "JavaScript"];
const user = { name: "Alex", age: 25, isLearning: true };
console.log(user.name, user["age"]);
const list = document.querySelector("#skillList");
function renderSkills() {
  list.textContent = "";
  skills.forEach(function (skill) { const li = document.createElement("li"); li.textContent = skill; list.appendChild(li); });
}
document.querySelector("#addSkill").addEventListener("click", function () { if (!skills.includes("DOM")) { skills.push("DOM"); } renderSkills(); });
renderSkills();
