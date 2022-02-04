const burger = document.querySelector(".burger");
const navLinks = document.querySelector("#navlinks");

burger.addEventListener("click", toggleBurger);

let visible = false;
function toggleBurger() {
	visible = !visible;
	navLinks.style.display = visible ? "block" : "none";
}
