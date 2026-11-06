
const SECRET_WORD = "vitd"; 
const PASSWORD_HINT = "smile."; 

const hint = document.getElementById("hint");
hint.textContent = "A hint: " + PASSWORD_HINT;

document.getElementById("gate-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const typed = document.getElementById("password").value.trim().toLocaleLowerCase();
  if (typed === SECRET_WORD.trim().toLocaleLowerCase()) {
    document.getElementById("gate").classList.add("hidden");
    window.scrollTo(0, 0);
  } else {
    document.getElementById("error").textContent = "Not quite… take another guess ♡";
    document.getElementById("password").select();
  }
});


for (let i = 0; i < 14; i++) {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "✧";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.bottom = "-30px";
  heart.style.animationDelay = `${Math.random() * 10}s`;
  heart.style.animationDuration = `${8 + Math.random() * 8}s`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  document.body.appendChild(heart);
}
