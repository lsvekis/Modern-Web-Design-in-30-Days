function handleFilter(filter) {
  if (filter === "all") {
    renderTopics(topics);
  } else {
    const filtered = topics.filter(function (topic) {
      return topic.title === filter;
    });
    renderTopics(filtered);
  }
}
