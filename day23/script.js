// Project 1 (Days 21–23): Data → Render → Interact

// 1) Data
const topics = [
  { title: "HTML", description: "Structure and meaning of web pages.", level: "Beginner" },
  { title: "CSS", description: "Layout, typography, color, and visual hierarchy.", level: "Beginner" },
  { title: "JavaScript", description: "Logic, interaction, and dynamic content.", level: "Beginner" },
];

// 2) Cache DOM references
const topicsSection = document.querySelector("#topics");
const buttons = document.querySelectorAll("#controls button");

// 3) Helpers
function createTopicCard(topic) {
  const article = document.createElement("article");
  article.className = "topic-card";

  const h3 = document.createElement("h3");
  h3.textContent = topic.title;

  const p = document.createElement("p");
  p.textContent = topic.description;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = topic.level;

  article.append(h3, p, tag);
  return article;
}

function renderTopics(list) {
  topicsSection.innerHTML = "<h2>What I’m Learning</h2>";

  if (!Array.isArray(list) || list.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No topics found.";
    topicsSection.appendChild(msg);
    return;
  }

  list.forEach((topic) => topicsSection.appendChild(createTopicCard(topic)));
}

function setActiveButton(activeBtn) {
  buttons.forEach((b) => b.classList.remove("active"));
  activeBtn.classList.add("active");
}

function handleFilter(filter) {
  if (filter === "all") return renderTopics(topics);
  const filtered = topics.filter((t) => t.title === filter);
  renderTopics(filtered);
}

// 4) Events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    setActiveButton(button);
    handleFilter(filter);
  });
});

// 5) Initial render
renderTopics(topics);
console.log("Project 1 loaded");
