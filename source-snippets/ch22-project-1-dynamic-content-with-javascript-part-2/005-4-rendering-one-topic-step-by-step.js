function renderTopics() {
  topics.forEach(function (topic) {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
