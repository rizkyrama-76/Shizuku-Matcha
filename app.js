document.addEventListener("alpine:init", () => {
  // Search
  Alpine.store("search", {
    keyword: "",
  });

  // Data Produk
  Alpine.data("favorit", () => ({
    search: "",
    items: [
      {
        id: 1,
        name: "Latte Shizuku",
        img: "Matcha_Latte.jpg",
        price: 35000,
        rating: 5,
        desc: "Latte Shizuku adalah minuman matcha klasik dengan perpaduan matcha Jepang berkualitas tinggi dan susu segar yang creamy. Rasa matcha yang lembut berpadu sempurna dengan tekstur susu yang halus, menghasilkan minuman yang seimbang, menenangkan, dan cocok dinikmati kapan saja.",
        recommendations: [10, 12],
      },
      {
        id: 2,
        name: "Smooth Matcha",
        img: "Smoothie_Matcha.jpg",
        price: 45000,
        rating: 4,
        desc: "Smooth Matcha menghadirkan sensasi segar dari matcha premium yang diblender bersama es dan susu hingga menghasilkan tekstur yang lembut dan creamy. Minuman ini cocok untuk kamu yang menyukai matcha dengan rasa lebih ringan, segar, dan menyegarkan di cuaca panas.",
        recommendations: [7, 9],
      },
      {
        id: 3,
        name: "Boba Calm",
        img: "Boba_Matcha.jpeg",
        price: 40000,
        rating: 5,
        desc: "Boba Calm adalah perpaduan matcha creamy dengan boba kenyal yang memberikan sensasi menyenangkan di setiap tegukan. Rasa manis yang seimbang dan tekstur boba yang lembut membuat minuman ini menjadi favorit bagi pecinta minuman kekinian berbasis matcha.",
        recommendations: [10, 12],
      },
      {
        id: 4,
        name: "Kōhī Midori",
        img: "Espresso_Matcha.jpg",
        price: 38000,
        rating: 3,
        desc: "Kōhī Midori memadukan espresso pekat dengan matcha Jepang pilihan, menghasilkan cita rasa unik antara pahit kopi dan umami matcha. Minuman ini cocok untuk kamu yang ingin menikmati kombinasi kopi dan matcha dalam satu sajian yang berkarakter.",
        recommendations: [10, 11],
      },
      {
        id: 5,
        name: "Hot Matcha Original",
        img: "Hot_Matcha.jpeg",
        price: 28000,
        rating: 3,
        desc: "Hot Matcha Original disajikan hangat dengan rasa matcha yang autentik dan menenangkan. Minuman ini dibuat dari bubuk matcha pilihan tanpa tambahan rasa berlebih, cocok untuk kamu yang ingin menikmati matcha dalam bentuk paling sederhana dan tradisional.",
        recommendations: [7, 12],
      },
      {
        id: 6,
        name: "Matcha Coconut Latte",
        img: "Matcha_Coconut_Latte.jpg",
        price: 36000,
        rating: 4,
        desc: "Matcha Coconut Latte memadukan matcha lembut dengan aroma dan rasa kelapa yang khas. Perpaduan ini menghasilkan rasa yang unik, creamy, dan sedikit eksotis, cocok untuk kamu yang ingin mencoba sensasi baru dari minuman berbasis matcha.",
        recommendations: [9, 10],
      },
      {
        id: 7,
        name: "Soft Cloud Cake",
        img: "Matcha_Soft_Cake.jpg",
        price: 32000,
        rating: 4,
        desc: "Soft Cloud Cake adalah kue matcha dengan tekstur lembut dan ringan seperti awan. Rasa manisnya tidak berlebihan dan berpadu harmonis dengan aroma matcha, menjadikannya pilihan sempurna sebagai pendamping minuman favoritmu.",
        recommendations: [1, 5],
      },
      {
        id: 8,
        name: "Parfait Verde",
        img: "Parfait_Matcha.jpg",
        price: 42000,
        rating: 5,
        desc: "Parfait Verde merupakan dessert berlapis yang memadukan matcha, krim lembut, dan topping pilihan. Setiap lapisan menghadirkan rasa yang kaya dan tekstur yang beragam, cocok untuk kamu yang ingin menikmati dessert matcha dengan tampilan dan rasa premium.",
        recommendations: [4, 5],
      },
      {
        id: 9,
        name: "Matcha Cream",
        img: "IceCream_Matcha.jpg",
        price: 30000,
        rating: 4,
        desc: "Matcha Cream adalah es krim matcha dengan tekstur lembut dan rasa yang creamy. Dibuat dari matcha berkualitas, dessert ini memberikan sensasi dingin yang menyegarkan sekaligus mempertahankan cita rasa matcha yang khas.",
        recommendations: [3, 5],
      },
      {
        id: 10,
        name: "Matcha Donut",
        img: "Matcha_Donut.jpg",
        price: 22000,
        rating: 4,
        desc: "Matcha Donut merupakan donat empuk dengan balutan rasa matcha yang lembut dan manis. Teksturnya yang ringan serta aroma matcha yang khas membuat camilan ini cocok dinikmati bersama secangkir teh atau kopi.",
        recommendations: [1, 7],
      },
      {
        id: 11,
        name: "Matcha Roll Cake",
        img: "Role_cake_matcha.jpeg",
        price: 33000,
        rating: 5,
        desc: "Matcha Roll Cake dibuat dengan sponge cake lembut yang digulung bersama krim matcha yang halus. Perpaduan tekstur dan rasa yang seimbang menjadikan dessert ini favorit bagi pecinta kue dengan cita rasa matcha yang kuat namun tetap ringan.",
        recommendations: [1, 4],
      },
      {
        id: 12,
        name: "Matcha Mochi",
        img: "Matcha_Mochi.jpg",
        price: 25000,
        rating: 5,
        desc: "Matcha Mochi memiliki tekstur kenyal khas mochi Jepang dengan isian matcha lembut di dalamnya. Rasa manis yang pas dan aroma matcha yang kuat menjadikan dessert ini pilihan tepat untuk camilan ringan maupun penutup hidangan.",
        recommendations: [3, 5],
      },
    ],
    // Live Search
    filteredItems() {
      const keyword = Alpine.store("search").keyword.toLowerCase().trim();

      if (!keyword) return this.items;

      return this.items.filter((item) =>
        item.name.toLowerCase().includes(keyword)
      );
    },
    openModal(item) {
      const modal = document.getElementById("item-detail-modal");

      // ===== ISI KONTEN UTAMA =====
      document.getElementById("modal-img").src = "img/" + item.img;
      document.getElementById("modal-title").innerText = item.name;
      document.getElementById("modal-desc").innerText = item.desc;

      // ===== REKOMENDASI MENU =====
      const recContainer = document.getElementById("modal-recommendations");
      recContainer.innerHTML = "";

      // kalau item punya rekomendasi
      if (item.recommendations && item.recommendations.length > 0) {
        item.recommendations.forEach((recId) => {
          const menu = this.items.find((m) => m.id === recId);
          if (!menu) return;

          const span = document.createElement("span");
          span.classList.add("rec-item");
          span.innerText = menu.name;

          // klik → buka modal menu rekomendasi
          span.onclick = () => this.openModal(menu);

          recContainer.appendChild(span);
        });
      } else {
        recContainer.innerHTML = "<small>Tidak ada rekomendasi.</small>";
      }

      modal.style.display = "block";
    },
  }));

  // CART STORE
  Alpine.store("cart", {
    // Data keranjang
    items: JSON.parse(localStorage.getItem("cart_items")) || [],
    total: JSON.parse(localStorage.getItem("cart_total")) || 0,
    quantity: JSON.parse(localStorage.getItem("cart_qty")) || 0,

    // SIMPAN LOCALSTORAGE
    save() {
      localStorage.setItem("cart_items", JSON.stringify(this.items));
      localStorage.setItem("cart_total", JSON.stringify(this.total));
      localStorage.setItem("cart_qty", JSON.stringify(this.quantity));
    },

    // TAMBAH ITEM
    add(item) {
      let data = this.items.find((x) => x.id === item.id);

      if (data) {
        data.quantity++;
        data.total = data.quantity * data.price;
      } else {
        this.items.push({
          id: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          quantity: 1,
          total: item.price,
        });
      }

      this.quantity++;
      this.total += item.price;
      this.save();
    },

    // HAPUS ITEM
    remove(id) {
      let data = this.items.find((x) => x.id === id);

      if (!data) return;

      if (data.quantity > 1) {
        data.quantity--;
        data.total = data.quantity * data.price;
      } else {
        this.items = this.items.filter((x) => x.id !== id);
      }

      this.quantity--;
      this.total -= data.price;
      this.save();
    },

    // CLEAR CART
    clear() {
      this.items = [];
      this.total = 0;
      this.quantity = 0;
      this.save();
    },
  });
});

// Form Validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// KIRIM DATA KETIKA TOMBOL CHECKOUT DI KLIK
checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);

  window.open("http://wa.me/6281283742937?text=" + encodeURIComponent(message));

  // KOSONGKAN KERANJANG SETELAH CHECKOUT
  Alpine.store("cart").clear();

  // (opsional) reset form
  form.reset();
});

// FORMAT PESAN WA
const formatMessage = (obj) => {
  return `Data Customer
  Nama: ${obj.name}
  Email: ${obj.email}
  No HP: ${obj.phone}
  Pembayaran: ${obj.payment}
Data Pesanan
${JSON.parse(obj.items).map(
  (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
)}
TOTAL: ${rupiah(obj.total)}
Terima Kasih.`;
};

// RUPIAH
function rupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}
