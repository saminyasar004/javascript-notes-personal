const textEl = document.getElementById("textEl");
const paraEl = document.getElementById("paraEl");

function changeDetact() {
    paraEl.textContent = textEl.value;
}

textEl.addEventListener("keyup", changeDetact);
textEl.addEventListener("keydown", changeDetact);
