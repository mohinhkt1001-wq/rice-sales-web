// ===== LINK WEB APP GOOGLE SCRIPT =====
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzk63ZP43XRP3Ej_1iR6ywLzk6AsTjZNawDH7ga1urlIhykN-2mQr7OVqqZtN1jHHzn/exec";

// ===== LOAD DANH SÁCH GẠO =====
function loadRiceList() {
  fetch(WEB_APP_URL)
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("rice");
      select.innerHTML = '<option value="">-- Chọn loại gạo --</option>';

      data.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.name;
        opt.textContent = item.name + " - " + item.price + " đ/kg";
        opt.dataset.price = item.price;
        select.appendChild(opt);
      });
    })
    .catch(err => console.error("Lỗi load danh sách gạo:", err));
}

// ===== AUTO LOAD KHI MỞ TRANG =====
window.onload = loadRiceList;
