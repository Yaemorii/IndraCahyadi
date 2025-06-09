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

document.addEventListener("DOMContentLoaded", function () {
    const text = "Website yang Saya Buat";
    const element = document.getElementById("typing-text");

    let i = 0;
    let isDeleting = false;

    function typeWriterLoop() {
      if (!isDeleting) {
        element.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
          isDeleting = true;
          setTimeout(typeWriterLoop, 1500); // jeda sebelum menghapus
          return;
        }
      } else {
        element.textContent = text.substring(0, i - 1);
        i--;
        if (i === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeWriterLoop, isDeleting ? 50 : 100); // kecepatan ketik/hapus
    }

    typeWriterLoop();
  });

  // Fungsi untuk menampilkan modal dengan gambar yang diklik
  function openModal(imgElement) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
  }

  // Fungsi untuk menutup modal
  function closeModal() {
    const modal = document.getElementById("imgModal");
    modal.style.display = "none";
  }

  // Optional: Tutup modal saat klik di luar gambar
  window.onclick = function (event) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    if (event.target === modal && event.target !== modalImg) {
      modal.style.display = "none";
    }
  };
