

$(document).ready(function () {

 
    const cursor = document.querySelector(".custom-cursor");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Smooth animation loop
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.35;
        cursorY += (mouseY - cursorY) * 0.35;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Track mouse position
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX - 10;
        mouseY = e.clientY - 10;
    });

    // Grow cursor on links/buttons hover
    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });
    });

    member.addEventListener('mouseleave', () => {
        hoverImg.style.transform = 'translate(-50%, -50%) scale(0)';
        hoverImg.style.opacity = '0';
    });

});
