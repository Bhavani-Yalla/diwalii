

// PAGE NAVIGATION

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
});


// NO BUTTON ESCAPES

function moveNoButton() {
  const maxX = Math.max(10, window.innerWidth - noBtn.offsetWidth - 15);
  const maxY = Math.max(10, window.innerHeight - noBtn.offsetHeight - 15);

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * (maxX - 10) + 10 + "px";
  noBtn.style.top = Math.random() * (maxY - 10) + 10 + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});


// FLOATING HEARTS

const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.innerHTML = "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);


// LETTER MESSAGE

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const typedMessage = document.getElementById("typedMessage");
const signature = document.getElementById("signature");
const tapText = document.getElementById("tapText");

// One continuous paragraph

const message =
  "Hloooo waste fellowww ❤️ Happy Diwali... raaaa! 🪔 Na phone lu ethu sariga, eppudu call chesina busy busy busy... asalu ii madhya na phones sariga ethatledhu nuvvu. Pedhamma ni edipinchakunda ippudu nundi ayina manchiga chadhuvuthav ani anukuntunna. Ii exam lu ayina pass avuu! andharitho matlalu padadam endhuku cheppuu. Bayataki vellinapudu jagrathaga vundu, kuncham slow ga drive chesthe manchidhi. Ivvala ayina kuncham fast ga vellu intiki! ❤️. em cheppalo teliyatledhu entha alochinchina. ayina natho matladaku nannu chii vellu annav podhuna nen hurt ayya velli mi chelli tho ney matladuko sarey naaaa.                         Byee...               Love u Kumaruu...❤️";

let letterOpened = false;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// TYPE ONE CHARACTER AT A TIME

async function typeLetter() {
  typedMessage.textContent = "";

  for (let i = 0; i < message.length; i++) {
    typedMessage.textContent += message[i];

    // Slightly slower typing for a natural effect
    await wait(38);

    // Keep the newest text visible on small phone screens
    letter.scrollTop = letter.scrollHeight;
  }

  // Show signature after typing finishes
  signature.style.display = "block";
}


// OPEN ENVELOPE

envelope.addEventListener("click", async () => {
  if (letterOpened) return;

  letterOpened = true;

  envelope.classList.add("open");
  tapText.textContent = "A special letter for you! ❤️";

  await wait(800);

  letter.classList.add("show");

  await wait(500);

  await typeLetter();

  tapText.textContent = "Hope you liked your surprise! 💕";
});
