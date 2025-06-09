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

document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth'
  });
});

 function openModal(imgElement) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
  }

  function closeModal() {
    document.getElementById("imgModal").style.display = "none";
  }

  // Sembunyikan semua wireframe di luar 6 pertama
const wireframeCards = document.querySelectorAll('#wireframeGrid .design-card');
const showMoreBtn = document.getElementById('showMoreBtn');

// Sembunyikan elemen ke-6 dan seterusnya
wireframeCards.forEach((card, index) => {
  if (index >= 6) {
    card.style.display = 'none';
  }
});

// Toggle tampilkan sisanya saat tombol diklik
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;

  wireframeCards.forEach((card, index) => {
    if (index >= 6) {
      card.style.display = isExpanded ? 'flex' : 'none';
    }
  });

  // Ganti teks dan panah
  showMoreBtn.innerHTML = isExpanded ? 'Lebih Sedikit' : 'Selengkapnya';
});
