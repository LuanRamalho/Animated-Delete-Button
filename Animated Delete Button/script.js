const btn = document.getElementById("deleteBtn");
btn.addEventListener("click", () => {
  if (btn.classList.contains("run")) return;
  btn.classList.add("run");
  btn.querySelector("span").textContent = "Deleting...";
  setTimeout(() => {
    btn.querySelector("span").textContent = "Deleted!";
    btn.style.background = "#16a374";
  }, 850);
  setTimeout(() => {
    btn.classList.remove("run");
    btn.querySelector("span").textContent = "Delete";
    btn.style.background = "";
  }, 2200);
});