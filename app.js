const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzk63ZP43XRP3Ej_1iR6ywLzk6AsTjZNawDH7ga1urlIhykN-2mQr7OVqqZtN1jHHzn/exec";

function loadRiceList() {
  fetch(WEB_APP_URL)
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("rice");
      select.innerHTML = '<option value="">-- Chọn loại gạo --</option>';
data.forEach(item => {
  const opt = document.createElement("option");

  // ĐÚNG theo tên cột sheet của bạn
  opt.value = item["Tên hàng"];
  opt.textContent = item["Tên hàng"] + " - " + item["Giá mặc định"] + "đ/kg";
  opt.dataset.price = item["Giá mặc định"];
  select.appendChild(opt);
});    
    })
    .catch(err => console.error("Lỗi load gạo:", err));
}

window.onload = loadRiceList;
