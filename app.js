const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz63ZP43XRP3Ej_iR6ywLzK6AsTjZNawDH7galurIhykN-2mQr70VQqzTN1jHhnZn/exec";

function loadRiceList() {
  fetch(WEB_APP_URL)
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("rice");
      select.innerHTML = '<option value="">-- Chọn gạo --</option>';

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

window.onload = loadRiceList;
