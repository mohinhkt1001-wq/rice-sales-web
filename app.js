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
document.getElementById("saveBtn").addEventListener("click", function () {
  const riceSelect = document.getElementById("rice");
  const kg = document.getElementById("kg").value;
  const price = document.getElementById("price").value;
  const payment = document.getElementById("payment").value;

  if (!riceSelect.value || !kg || !price) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const total = kg * price;
  const today = new Date().toLocaleDateString("vi-VN");

  const table = document.getElementById("orderTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = today;
  row.insertCell(1).innerText = riceSelect.value;
  row.insertCell(2).innerText = kg;
  row.insertCell(3).innerText = price;
  row.insertCell(4).innerText = total;
  row.insertCell(5).innerText = payment;

  // reset form
  document.getElementById("kg").value = "";
  document.getElementById("price").value = "";
  riceSelect.selectedIndex = 0;
});

