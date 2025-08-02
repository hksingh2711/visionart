document.addEventListener("DOMContentLoaded", function () {
	// Preloader removal after 3s
	setTimeout(function () {
		document.body.classList.add("loaded");
	}, 3000);

	// Custom Cursor Logic
	const cursor = document.querySelector(".custom-cursor");
	let mouseX = 0, mouseY = 0;
	let cursorX = 0, cursorY = 0;

	function animateCursor() {
		cursorX += (mouseX - cursorX) * 0.35;
		cursorY += (mouseY - cursorY) * 0.35;
		cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
		requestAnimationFrame(animateCursor);
	}
	animateCursor();

	document.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	// Hover effect on links and buttons
	document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
		el.addEventListener("mouseenter", () => {
			cursor.classList.add("hover");
		});
		el.addEventListener("mouseleave", () => {
			cursor.classList.remove("hover");
		});
	});
});
