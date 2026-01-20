const btn = document.getElementById("bye-btn");
btn.addEventListener("click", () => {
	window.electronAPI.exit();
});
