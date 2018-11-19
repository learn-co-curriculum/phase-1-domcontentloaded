function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", function(event) {
    updateDOM()
  });
}

function updateDOM() {
  document.getElementById("text").innerHTML = "This is really cool!";
}
