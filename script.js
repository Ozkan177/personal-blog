// script.js

// Sayfa yüklendikten sonra çalış
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Sayfa yenilenmesini engelle

      // Önce varsa eski mesajı kaldır
      const oldMessage = document.querySelector("#form-msg");
      if (oldMessage) oldMessage.remove();

      // Yeni mesajı oluştur ve ekle
      const msg = document.createElement("p");
      msg.id = "form-msg";
      msg.textContent = "Mesajınız gönderildi!";
      msg.style.color = "green";
      msg.style.marginTop = "20px";

      form.appendChild(msg);

      // Formu temizle
      form.reset();
    });
  }
});


// Tema değiştirme özelliği
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  // Sayfa ilk açıldığında mevcut temayı uygula
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Tema durumunu kaydet
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Buton ikonunu değiştir
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });
}
