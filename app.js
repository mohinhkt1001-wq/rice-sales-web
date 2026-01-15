const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzk63ZP43XRP3Ej_1iR6ywLzk6AsTjZNawDH7ga1urlIhykN-2mQr7OVqqZtN1jHHzn/exec";

function addSale() {
  const maGao = document.getElementById("rice").value;
  const khoiLuong = document.getElementById("qty").value;
  const giaBan = document.getElementById("price").value || "";
  const thanhToan = document.getElementById("payment").value;

  if (!maGao || !khoiLuong) {
    alert("Vui lòng chọn gạo và nhập khối lượng");
    return;
  }

  const today = new Date();
  const ngay = today.toLocaleDateString("vi-VN");

  const tenGao = document.querySelector("#rice option:checked").text;
  const giaMacDinh = document.querySelector("#rice option:checked").dataset.price || "";
  const giaThucTe = giaBan || giaMacDinh;
  const tongTien = Number(khoiLuong) * Number(giaThucTe);

  const data = {
    maGao,
    ngay,
    tenGao,
    khoiLuong,
    giaMacDinh,
    giaBan: giaThucTe,
    tongTien,
    thanhToan,
    taiKhoan: "",
    nguoiNhan: ""
  };

  fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      alert("Đã lưu đơn vào Google Sheet!");
      location.reload();
    } else {
      alert("Lỗi khi lưu dữ liệu");
    }
  })
  .catch(err => {
    alert("Không kết nối được Google Sheet");
    console.error(err);
  });
}
