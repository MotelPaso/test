const btn = document.getElementById("bye-btn");
const change = document.getElementById("shit-btn");
btn.addEventListener("click", () => {
	window.electronAPI.exit();
});
change.addEventListener("click", () => {
	window.electronApi.error();
});
