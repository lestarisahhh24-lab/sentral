/* =====================================================
   BAGIAN 1: DATA (edit di sini, tidak perlu ubah HTML)
   ===================================================== */

// Nomor WhatsApp: format internasional, tanpa +, spasi, atau 0 di depan.
// Contoh nomor 0812-3456-7890 ditulis 6281234567890
const ADMINS = [
  { name: "Admin 1", role: "Pemesanan dan harga", phone: "628117500128" },
  { name: "Admin 2", role: "Pemesanan dan harga", phone: "6281286828999" },
];

// Nomor yang dipakai tombol WhatsApp pada unit (default: admin pertama)
const DEFAULT_PHONE = ADMINS[0].phone;

// Data unit. Foto: simpan di folder images/ lalu tulis nama filenya.
const KATEGORI = [
  { id: "excavator",  name: "EXCAVATOR" },
  { id: "backhoe",    name: "BACKHLOE LOADER" },
  { id: "breaker",    name: "BREAKER" },
  { id: "trado",      name: "TRADO & TOWING" },
  { id: "genset",     name: "GENSET" },
  { id: "poco",       name: "POCO" },
    
  
];

// Data produk (semua data spesifikasi di bawah masih dummy). "kategori" harus salah satu id di KATEGORI.
const UNITS = [
{
  id: "ex906E",
  kategori: "excavator",
  name: "LIUGONG 906E",
  kelas: "Excavator 5,9 ton",
  photo: "906E.jpeg",
  desc: "Excavator serbaguna dengan ukuran kompak dan tenaga yang sesuai untuk berbagai pekerjaan konstruksi.",
  specs: {
    "Berat operasi": "± 5,9 ton",
    "Kapasitas bucket": "± 0,21 m³",
    "Tenaga mesin": "± 49 HP",
    "Tipe mesin": "Yanmar 4TNV94L-BVLY",
    "Putaran mesin": "2.100 rpm",
    "Daya gali bucket": "± 41 kN",
    "Daya gali arm": "± 31 kN",
    "Aliran hidrolik maksimum": "± 142,8 L/menit",
    "Tekanan hidrolik": "± 25 MPa",
    "Kedalaman gali maksimum": "± 3,88 m",
    "Jangkauan gali maksimum": "± 6,21 m",
    "Ketinggian buang maksimum": "± 4,14 m",
    "Lebar track shoe": "± 400 mm",
    "Panjang": "± 5,9 m",
    "Lebar": "± 1,9 m",
    "Tinggi": "± 2,63 m"
  },
  usage: "Cocok untuk pekerjaan penggalian, penataan lahan, pembuatan drainase, dan pemindahan material."
},
 {
  id: "ex906F",
  kategori: "excavator",
  name: "LIUGONG 906F",
  kelas: "Excavator 5,6 ton",
  photo: "3.jpeg",
  desc: "Excavator kompak dengan performa andal untuk berbagai pekerjaan konstruksi dan penggalian.",
  specs: {
    "Berat operasi": "± 5,6 ton",
    "Kapasitas bucket": "± 0,21 m³",
    "Tenaga mesin": "± 48 HP",
    "Tipe mesin": "Yanmar 4TNV94L-ZCWCLY",
    "Putaran mesin": "2.000 rpm",
    "Daya gali bucket": "± 41 kN",
    "Daya gali arm": "± 31 kN",
    "Aliran hidrolik maksimum": "± 136 L/menit",
    "Tekanan hidrolik": "± 25 MPa",
    "Lebar track shoe": "400 / 600 mm",
    "Panjang": "± 5,9 m",
    "Lebar": "± 2,16 m",
    "Tinggi": "± 2,58 m"
  },
  usage: "Cocok untuk pekerjaan penggalian, penataan lahan, pembuatan drainase, dan pemindahan material."
},
 {
  id: "ex908E",
  kategori: "excavator",
  name: "LIUGONG 908E",
  kelas: "Excavator 7,5 ton",
  photo: "908E.png",
  desc: "Excavator bertenaga dengan kapasitas lebih besar untuk pekerjaan konstruksi dan penggalian.",
  specs: {
    "Berat operasi": "± 7,5 ton",
    "Kapasitas bucket": "± 0,32 m³",
    "Tenaga mesin": "± 62 HP",
    "Tipe mesin": "Yanmar 4TNV98",
    "Putaran mesin": "2.200 rpm",
    "Daya gali bucket": "± 56 kN",
    "Daya gali arm": "± 38 kN",
    "Aliran hidrolik maksimum": "± 167,2 L/menit",
    "Tekanan hidrolik": "± 29,4 MPa",
    "Lebar track shoe": "± 450 mm",
    "Panjang": "± 6,1 m",
    "Lebar": "± 2,26 m",
    "Tinggi": "± 2,7 m"
  },
  usage: "Cocok untuk pekerjaan konstruksi, penggalian, penataan lahan, dan pemindahan material."
},

{
  id: "breaker",
  kategori: "breaker",
  name: "BREAKER",
  kelas: "Hydraulic Breaker",
  photo: "breaker1.jpg",
  desc: "Attachment hidrolik untuk membantu memecah beton, batu, dan material keras lainnya.",
  specs: {
    "Jenis attachment": "Hydraulic Breaker",
    "Fungsi": "Memecah beton dan material keras",
    "Sistem penggerak": "Hidrolik",
    "Media kerja": "Beton, batu, dan material keras",
    "Metode kerja": "Pukulan hidrolik",
    "Tekanan kerja": "Menyesuaikan unit",
    "Aliran hidrolik": "Menyesuaikan unit excavator",
    "Ukuran breaker": "Menyesuaikan kelas excavator",
    "Jenis pemasangan": "Arm excavator",
    "Mata pahat": "Chisel"
  },
  usage: "Cocok untuk pembongkaran beton, pemecahan batu, penghancuran struktur, dan pekerjaan konstruksi."
},

{
  id: "backhoe",
  kategori: "backhoe",
  name: "BACKHOE LOADER JCB 3CX",
  kelas: "Backhoe Loader",
  photo: "Backhoe1.jpeg",
  desc: "Unit backhoe loader JCB 3CX yang digunakan untuk pekerjaan penggalian, pemuatan, dan pemindahan material.",
  specs: {
    "Berat": "7,3 ton",
    "Tenaga mesin": "55 kW",
    "Torsi maksimum": "400 Nm",
    "Putaran pada torsi maksimum": "1.200 rpm",
    "Seri model": "CX",
    "Pabrikan mesin": "JCB",
    "Tipe mesin": "EcoMax",
    "Kapasitas mesin": "4,4 L",
    "Jumlah silinder": "4",
    "Tingkat emisi": "Tier 4 Final/Stage IV",
    "Kecepatan jalan": "36,7 km/jam",
    "Ban standar": "14x17.5 10PR",
    "Penggerak": "A",
    "Lebar bucket": "2,35 m",
    "Lebar transportasi": "2,35 m",
    "Panjang transportasi": "5,62 m",
    "Tinggi transportasi": "3,61 m",
    "Tinggi bongkar maksimum": "4,24 m",
    "Jangkauan horizontal maksimum": "5,53 m"
  },
  usage: "Cocok untuk pekerjaan konstruksi, penggalian, pemuatan, dan pemindahan material di berbagai area kerja."
},

 {
  id: "towing",
  kategori: "trado",
  name: "TOWING",
  kelas: "Kendaraan Towing",
  photo: "towing1.png",
  desc: "Kendaraan pendukung untuk membantu proses evakuasi dan pemindahan kendaraan atau unit.",
  specs: {
    "Jenis unit": "Kendaraan towing",
    "Fungsi": "Evakuasi dan pemindahan kendaraan",
    "Sistem pengangkutan": "Menyesuaikan jenis towing",
    "Kapasitas angkut": "Menyesuaikan unit",
    "Area penggunaan": "Jalan raya dan area operasional"
  },
  usage: "Cocok untuk evakuasi, pemindahan kendaraan, dan mendukung mobilisasi unit."
},
  {
  id: "trado",
  kategori: "trado",
  name: "TRADO",
  kelas: "Self Loader / Trado",
  photo: "trado1.png",
  desc: "Unit pengangkut yang digunakan untuk memobilisasi alat berat dari satu lokasi ke lokasi lainnya.",
  specs: {
    "Jenis unit": "Self Loader / Trado",
    "Fungsi": "Pengangkutan alat berat",
    "Sistem loading": "Hidrolik",
    "Kapasitas angkut": "Menyesuaikan unit",
    "Bak angkut": "Flat deck",
    "Sistem penggerak": "PTO / hidrolik"
  },
  usage: "Cocok untuk mobilisasi excavator, alat berat, dan kendaraan konstruksi."
},

{
  id: "pocoCrane3T",
  kategori: "poco",
  name: "POCO CRANE 3 TON",
  kelas: "Crane 3 Ton",
  photo: "poco6.jpeg",
  desc: "Unit crane untuk membantu proses pengangkatan dan pemindahan material dengan kapasitas hingga 3 ton.",
  specs: {
    "Kapasitas angkat": "3 ton",
    "Kapasitas angkat maksimum": "3.000 kg",
    "Jenis unit": "Crane",
    "Fungsi": "Mengangkat dan memindahkan material",
    "Panjang lengan": "Menyesuaikan konfigurasi unit",
    "Sistem pengoperasian": "Hidrolik"
  },
  usage: "Cocok untuk pekerjaan pengangkatan material, konstruksi, dan pemindahan barang berat."
},

{
  id: "genset",
  kategori: "genset",
  name: "GENSET DIESEL",
  kelas: "Genset",
  photo: "genset1.jpg",
  desc: "Unit genset diesel dengan sistem canopy yang digunakan sebagai sumber tenaga listrik untuk mendukung kebutuhan operasional.",
  specs: {
    "Jenis unit": "Genset",
    "Tipe": "Diesel Generator Set",
    "Sistem bahan bakar": "Diesel",
    "Tipe enclosure": "Canopy",
    "Fungsi": "Sebagai sumber tenaga listrik",
    "Kapasitas": "Belum teridentifikasi",
    "Tegangan": "Belum teridentifikasi",
    "Frekuensi": "Belum teridentifikasi",
    "Daya": "Belum teridentifikasi"
  },
  usage: "Cocok digunakan sebagai sumber listrik untuk mendukung kebutuhan operasional, proyek konstruksi, dan kegiatan industri."
},
  // { id: "breaker", kategori: "attachment", name: "Breaker", kelas: "Attachment", photo: "breaker.jpg",
  //   desc: "Alat pemecah batu dan beton yang dipasang pada excavator.",
  //   specs: { "Tipe": "Hidrolik", "Cocok untuk": "Excavator 13 – 20 ton", "Fungsi": "Memecah batu dan beton" },
  //   usage: "Disewa bersama excavator. Konsultasikan kecocokan dengan admin." },
  // { id: "bucket", kategori: "attachment", name: "Bucket", kelas: "Attachment", photo: "bucket.jpg",
  //   desc: "Bucket tambahan untuk kebutuhan galian yang berbeda.",
  //   specs: { "Tipe": "Standar / lebar", "Cocok untuk": "Excavator 7 – 20 ton", "Fungsi": "Galian dan pemuatan" },
  //   usage: "Pilih ukuran sesuai pekerjaan. Konsultasikan dengan admin." },
];

// Brand alat. Logo (opsional): simpan di images/logo/ lalu isi "logo", mis. { name: "JCB", logo: "jcb.png" }
const BRANDS = [
  { logo: "jcb.png" },
  { logo: "liugong.png" },
  { logo: "doosan.png"},
  { logo: "mitsubishi.png" }];

// Klien (dummy). Sama seperti brand, boleh diberi logo.
const CLIENTS = [{ logo: "Pertamina.jpeg"},
  { logo: "apical.png" },
  { logo: "wilmar.png" },
  { logo: "sarioleo.png" },
  { logo: "energimas.png" },
  { logo: "agromurni.png" },
  { logo: "ivomas.png" },
  { logo: "sarioleo.png" },
  { logo: "PGN.png"},
  { logo: "emas.png" },
  { logo: "pdam.png" }];

// Data album. Simpan fotonya di folder images/album/ lalu tulis nama filenya.
// "unit" harus sama dengan id unit di atas (pc200, pc130, ex75) supaya filter bekerja.
const ALBUM = [
  { src: "1.jpeg",  unit: "ex906F" },
  { src: "2.jpeg",  unit: "ex906F" },
  { src: "3.jpeg",  unit: "ex906F" },
  { src: "4.jpeg",  unit: "ex906F" },
  { src: "5.jpeg",  unit: "ex906F" },
  { src: "6.jpeg",  unit: "ex906F" },
  { src: "7.jpeg",  unit: "ex906F" },
  { src: "towing1.png",     unit: "towing" },
  { src: "Backhoe1.jpeg",   unit: "backhoe" },
  { src: "poco1.jpeg",      unit: "pocoCrane3T" },
  { src: "poco2.jpeg",      unit: "pocoCrane3T" },
  { src: "poco3.jpeg",      unit: "pocoCrane3T" },
  { src: "poco4.jpeg",      unit: "pocoCrane3T" },
  { src: "poco5.jpeg",      unit: "pocoCrane3T" },
  { src: "poco6.jpeg",      unit: "pocoCrane3T" },
  { src: "poco7.jpeg",      unit: "pocoCrane3T" },
  { src: "poco8.jpeg",      unit: "pocoCrane3T" },
  { src: "trado1.png",      unit: "trado"},
  { src: "genset1.jpg",     unit: "genset" },
  { src: "breaker1.jpg",     unit: "breaker" },
];

// Instagram dan email untuk bagian Kontak. Ganti dengan milik usaha Anda.
// instagram: cukup nama akunnya, tanpa @ dan tanpa https://
const KONTAK = { instagram: "sentralmobilindodumai", email: "sentralmobilindo78@gmail.com" };

// Lokasi usaha untuk bagian Kontak. "peta" boleh berisi alamat lengkap atau nama tempat.
const LOKASI = { alamat: "Jl. Ahmad Yani, Bukit Datuk, Kec. Dumai Barat., Kota Dumai, Riau 28826", peta: "sentral motor dumai" };

// Ikon sederhana (garis SVG). Dipakai lewat <span class="ico" data-icon="nama"></span>
const ICONS = {
  file:   "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6",
  clock:  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v5l3 2",
  pin:    "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  user:   "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 3.6-6 8-6s8 2 8 6",
  truck:  "M2 6h11v10H2z M13 10h4l4 3v3h-8z M6 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M17 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",
  clip:   "M9 4h6v3H9z M7 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1 M9 14l2 2 4-4",
  tool:   "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z",
  award:  "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M8.5 13.5L7 21l5-3 5 3-1.5-7.5",
  zap:    "M13 2L4 14h7l-1 8 9-12h-7z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M21 21l-5-5",
  chat:   "M4 5h16v11H9l-5 4z",
  check:  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M8 12l3 3 5-6",
};

/* =====================================================
   BAGIAN 2: FUNGSI BANTU
   ===================================================== */

// Halaman detail ada di folder pages/, jadi path gambar & link perlu "../"
const isDetail = document.body.dataset.page === "detail";
const ROOT = isDetail ? "../" : "";

// Membuat link WhatsApp. encodeURIComponent mengubah teks agar aman dipakai di URL.
function waLink(phone, message) {
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
}

// Pesan otomatis yang menyebut nama unit
function unitMessage(unit) {
  if (unit.kategori === "trado") {
    return "Halo Admin" + unit.name + ". Mohon informasi tarif dan ketentuannya.";
  }
  return "Halo Admin" + unit.name +
         " Mohon informasi harga dan ketentuannya.";
}

// Foto unit. Jika file belum ada, gambar dihapus dan placeholder tetap terlihat.
function photoHTML(unit) {
  return '<div class="photo"><span>Foto ' + unit.name + '</span>' +
         '<img src="' + ROOT + 'images/' + unit.photo + '" alt="' + unit.name + '" onerror="this.remove()"></div>';
}

/* =====================================================
   BAGIAN 3: MENAMPILKAN KONTEN
   ===================================================== */

// Satu card produk
function cardHTML(u) {
  const specs = Object.entries(u.specs).slice(0, 3).map(function (s) {
    return "<li>" + s[0] + ": <strong>" + s[1] + "</strong></li>";
  }).join("");
  return '<article class="card">' + photoHTML(u) +
    '<div class="card-body"><p class="tag">' + u.kelas + '</p><h3>' + u.name + '</h3>' +
    '<p>' + u.desc + '</p><ul class="spec-list">' + specs + '</ul>' +
    '<div class="card-actions">' +
    '<a class="btn btn-dark" href="pages/unit-detail.html?id=' + u.id + '">Lihat Detail</a>' +
    '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink(DEFAULT_PHONE, unitMessage(u)) + '">Tanya via WhatsApp</a>' +
    '</div></div></article>';
}

// Katalog produk + tombol filter kategori (halaman utama)
function renderUnits() {
  const grid = document.getElementById("unit-list");
  const bar = document.getElementById("product-filters");
  if (!grid) return;
  let active = "all";
  function draw() {
    bar.innerHTML = [{ id: "all", name: "Semua" }].concat(KATEGORI).map(function (k) {
      return '<button class="filter' + (k.id === active ? " active" : "") + '" data-k="' + k.id + '">' + k.name + "</button>";
    }).join("");
    grid.innerHTML = UNITS.filter(function (u) {
      return active === "all" || u.kategori === active;
    }).map(cardHTML).join("");
  }
  bar.addEventListener("click", function (e) {
    const b = e.target.closest("[data-k]");
    if (b) { active = b.dataset.k; draw(); }
  });
  draw();
}

// Detail unit: id dibaca dari alamat, misalnya unit-detail.html?id=pc200
function renderDetail() {
  const box = document.getElementById("unit-detail");
  if (!box) return;
  const id = new URLSearchParams(location.search).get("id");
  const u = UNITS.find(function (x) { return x.id === id; });
  if (!u) {
    box.innerHTML = '<p>Unit tidak ditemukan.</p><a class="btn btn-dark" href="../index.html#unit">Kembali ke daftar unit</a>';
    return;
  }
  document.title = u.name + " | BekoRental";
  const rows = Object.entries(u.specs).map(function (s) {
    return "<tr><th>" + s[0] + "</th><td>" + s[1] + "</td></tr>";
  }).join("");
  box.innerHTML = '<a class="back" href="../index.html#unit">← Semua unit</a>' +
    '<div class="detail">' + photoHTML(u) + '<div>' +
    '<p class="tag">' + u.kelas + '</p><h1>' + u.name + '</h1><p>' + u.desc + '</p>' +
    '<h3>Spesifikasi</h3><table class="spec-table">' + rows + '</table>' +
    '<h3>Informasi penggunaan</h3><p>' + u.usage + '</p>' +
    '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink(DEFAULT_PHONE, unitMessage(u)) + '">Tanya via WhatsApp</a>' +
    '</div></div>';
}

// Kontak admin
function renderAdmins() {
  const box = document.getElementById("admin-list");
  if (!box) return;
  box.innerHTML = ADMINS.map(function (a) {
    const msg = "Halo " + a.name + ", saya ingin bertanya tentang penyewaan beko.";
    return '<article class="info"><h3>' + a.name + '</h3><p>' + a.role + '</p>' +
      '<p class="phone">+' + a.phone + '</p>' +
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink(a.phone, msg) + '">WhatsApp</a></article>';
  }).join("");
}

// Album foto: tombol filter + grid + tampilan besar (lightbox)
function renderAlbum() {
  const grid = document.getElementById("album-grid");
  const filterBox = document.getElementById("album-filters");
  if (!grid) return;
  const box = document.getElementById("lightbox");
  const bigImg = document.getElementById("lightbox-img");
  let active = "all"; // filter yang sedang dipilih

  function draw() {
    // Tombol filter: "Semua" + satu tombol per unit
    const list = [{ id: "all", name: "Semua" }].concat(UNITS);
    filterBox.innerHTML = list.map(function (f) {
      return '<button class="filter' + (f.id === active ? " active" : "") + '" data-f="' + f.id + '">' + f.name + "</button>";
    }).join("");
    // Foto yang cocok dengan filter. data-i = urutan foto di array ALBUM
    grid.innerHTML = ALBUM.map(function (a, i) {
      if (active !== "all" && a.unit !== active) return "";
      return '<button class="album-item" data-i="' + i + '"><span>' + a.caption + "</span>" +
        '<img src="' + ROOT + "images/album/" + a.src + '" alt="' + a.caption + '" loading="lazy" onerror="this.remove()"></button>';
    }).join("");
  }

  filterBox.addEventListener("click", function (e) {
    const b = e.target.closest("[data-f]");
    if (b) { active = b.dataset.f; draw(); }
  });
  grid.addEventListener("click", function (e) {
    const b = e.target.closest("[data-i]");
    if (!b) return;
    const a = ALBUM[b.dataset.i];
    bigImg.src = ROOT + "images/album/" + a.src;
    bigImg.alt = a.caption;
    document.getElementById("lightbox-caption").textContent = a.caption;
    box.hidden = false;
  });
  box.addEventListener("click", function (e) { if (e.target !== bigImg) box.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.hidden = true; });
  draw();
}

// Brand dan klien: tampil logo jika ada, kalau tidak tampil nama
function logoRow(id, list) {
  const box = document.getElementById(id);
  if (!box) return;
  box.innerHTML = list.map(function (x) {
    const alt = x.name || "";
    if (!x.logo && !alt) return "";
    // Jika file logo tidak ditemukan: tampilkan nama (kalau ada), kalau tidak ada nama kotaknya dihapus
    const inner = x.logo
      ? '<img src="images/logo/' + x.logo + '" alt="' + alt + '"' + (x.scale ? ' style="--s:' + x.scale + '"' : "") + ' onerror="' +
        (alt ? "this.replaceWith(document.createTextNode(this.alt))" : "this.parentNode.remove()") + '">'
      : alt;
    return '<div class="logo-item">' + inner + "</div>";
  }).join("");
}

// Ikon: ganti setiap <span data-icon="..."> dengan gambar SVG
function setupIcons() {
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICONS[el.dataset.icon] + '"/></svg>';
  });
}

// Tombol WhatsApp melayang dan banner ajakan
function setupWaLinks() {
  const msg = "Halo Admin, saya ingin bertanya tentang penyewaan alat berat.";
  ["wa-float", "cta-wa"].forEach(function (id) {
    const a = document.getElementById(id);
    if (a) a.href = waLink(DEFAULT_PHONE, msg);
  });
}
// Link Instagram dan email di bagian Kontak
function renderKontakLain() {
  const box = document.getElementById("kontak-lain");
  if (!box) return;
  const ig = KONTAK.instagram.replace("@", "");
  box.innerHTML =
    '<a class="kontak-link" target="_blank" rel="noopener" href="https://instagram.com/' + ig + '">' +
      '<span class="ico" data-icon="instagram"></span>@' + ig + '</a>' +
    '<a class="kontak-link" href="mailto:' + KONTAK.email + '">' +
      '<span class="ico" data-icon="mail"></span>' + KONTAK.email + '</a>';
}

// Peta Google Maps di bagian Kontak
function renderMap() {
  const box = document.getElementById("map-box");
  if (!box) return;
  box.innerHTML = '<p class="map-addr"><strong>Alamat:</strong> ' + LOKASI.alamat + '</p>' +
    '<iframe title="Peta lokasi" loading="lazy" src="https://www.google.com/maps?q=' + encodeURIComponent(LOKASI.peta) + '&output=embed"></iframe>';
}

// Animasi muncul saat di-scroll: elemen diberi class "reveal", lalu "show" saat terlihat
function setupReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section h2, .section .lead, .info, .steps li, .stat, .why-item, .card, .album-item, .logo-item, .map-box, .cta-inner").forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Menu mobile: tombol ☰ menambah/menghapus class "open"
function setupMenu() {
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function () { menu.classList.remove("open"); });
}

// Jalankan semuanya
renderUnits();
renderDetail();
renderAdmins();
renderAlbum();
logoRow("brand-list", BRANDS);
logoRow("client-list", CLIENTS);
setupMenu();
renderMap();
renderKontakLain();
setupWaLinks();
setupIcons();
setupReveal();
document.getElementById("year").textContent = new Date().getFullYear();
