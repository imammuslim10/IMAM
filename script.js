document.getElementById("color-button").addEventListener("click", function() {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});