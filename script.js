// Animasi saat scroll menggunakan IntersectionObserver
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  section.classList.add('fade-out');
  observer.observe(section);
});

// Validasi form sederhana
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah dikirim.");
  this.reset();
});

// Scroll ke bagian projects
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth'
  });
});

// Modal logika: buka & tutup
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");

// Delegasi: buka modal saat gambar di-klik
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('design-img')) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }

  // Tutup modal jika klik di luar gambar
  if (e.target.id === "imgModal" || e.target.classList.contains('close')) {
    modal.style.display = "none";
  }
});

// Tampilkan hanya 6 wireframe pertama
const wireframeCards = document.querySelectorAll('#wireframeGrid .design-card');
const showMoreBtn = document.getElementById('showMoreBtn');

wireframeCards.forEach((card, index) => {
  if (index >= 6) {
    card.style.display = 'none';
  }
});

let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;

  wireframeCards.forEach((card, index) => {
    if (index >= 6) {
      card.style.display = isExpanded ? 'flex' : 'none';
    }
  });

  showMoreBtn.innerHTML = isExpanded ? 'Lebih Sedikit' : 'Selengkapnya';
});
