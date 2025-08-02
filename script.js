// Loader timeout window.addEventListener('load', () => { setTimeout(() => { document.querySelector('.loader').classList.add('hidden'); document.getElementById('main-content').classList.remove('hidden'); typeWriter(); revealSections(); }, 1000); });

// Typewriter animation const txts = [ "Hi, I'm Cyril-Elvis, a web developer.", "Blockchain enthusiast based on the Sui chain.", "Network and Cybersecurity Geek.", "Also, a passionate Hooper 🏀" ];

let i = 0; let j = 0; let currentTxt = []; let isDeleting = false; let isEnd = false;

function typeWriter() { const display = document.getElementById('typewriter'); isEnd = false; display.innerHTML = currentTxt.join("");

if (i < txts.length) { if (!isDeleting && j <= txts[i].length) { currentTxt.push(txts[i][j]); j++; display.innerHTML = currentTxt.join(""); }

if (isDeleting && j > 0) {
  currentTxt.pop();
  j--;
  display.innerHTML = currentTxt.join("");
}

if (j === txts[i].length) {
  isEnd = true;
  isDeleting = true;
  setTimeout(typeWriter, 1500);
  return;
}

if (isDeleting && j === 0) {
  currentTxt = [];
  isDeleting = false;
  i++;
  if (i >= txts.length) i = 0;
}

setTimeout(typeWriter, isEnd ? 200 : 100);

} }

// Scroll reveal effect function revealSections() { const sections = document.querySelectorAll("section"); const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); } }); }, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec)); }

// Back to top button toggle const backToTop = document.getElementById('back-to-top'); window.addEventListener('scroll', () => { backToTop.style.display = window.scrollY > 400 ? 'block' : 'none'; });

                      
