const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzk63ZP43XRP3Ej_1iR6ywLzk6AsTjZNawDH7ga1urlIhykN-2mQr7OVqqZtN1jHHzn/exec";

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
    .catch(err => console.error("Lỗi load gạo:", err));
}

// khi chọn gạo → tự điền giá
document.addEventListener("DOMContentLoaded", () => {
  loadRiceList();
  document.getElementById("rice").addEventListener("change", function () {
    const price = this.options[this.selectedIndex].dataset.price;
    document.getElementById("price").value = price || "";
  });
});

