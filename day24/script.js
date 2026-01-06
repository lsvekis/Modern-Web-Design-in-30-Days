// Day 24 — Debugging Playground
const okBtn = document.querySelector("#okBtn");
const bugBtn = document.querySelector("#bugBtn");
const logicBtn = document.querySelector("#logicBtn");
const output = document.querySelector("#output p");

okBtn.addEventListener("click", () => {
  console.log("OK button clicked");
  output.textContent = "✅ This worked. Check the console log.";
});

bugBtn.addEventListener("click", () => {
  console.log("Bug button clicked — intentionally triggering an error.");
  // Intentional bug: selector returns null → TypeError below
  const missing = document.querySelector("#doesNotExist");
  missing.textContent = "This will throw an error";
});

logicBtn.addEventListener("click", () => {
  console.log("Logic test clicked");
  const age = 18;
  // Logic bug: Should 18 count as adult? Decide and fix the condition.
  if (age > 18) {
    output.textContent = "Adult ✅ (but check edge cases)";
  } else {
    output.textContent = "Not adult ❌ (is that correct at 18?)";
  }
});
