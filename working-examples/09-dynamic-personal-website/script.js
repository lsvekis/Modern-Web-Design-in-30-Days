const topics = [
  { title: "HTML", description: "Structure and meaning of web pages" },
  { title: "CSS", description: "Layout, design, and visual styling" },
  { title: "JavaScript", description: "Logic, interaction, and dynamic behavior" }
];
const topicsSection = document.querySelector("#topics");
const buttons = document.querySelectorAll("#controls button");
function createTopicCard(topic) {
  const article = document.createElement("article");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  title.textContent = topic.title;
  desc.textContent = topic.description;
  article.append(title, desc);
  return article;
}
function renderTopics(list = topics) {
  topicsSection.innerHTML = "<h2>What I’m Learning</h2>";
  list.forEach(function (topic) { topicsSection.appendChild(createTopicCard(topic)); });
}
function handleFilter(filter) {
  const filtered = filter === "all" ? topics : topics.filter(function (topic) { return topic.title === filter; });
  renderTopics(filtered);
}
function updateActiveButton(activeButton) {
  buttons.forEach(function (button) { button.classList.remove("active"); });
  activeButton.classList.add("active");
}
buttons.forEach(function (button) {
  button.addEventListener("click", function () { handleFilter(button.dataset.filter); updateActiveButton(button); });
});
renderTopics();
