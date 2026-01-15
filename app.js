// ===== DANH MỤC GẠO + GIÁ =====
const riceCatalog = [
 {name:"Gạo Đài Thơm 8", price:18000},
 {name:"Gạo ST21", price:23000},
 {name:"Gạo ST25", price:30000},
 {name:"Gạo Thơm Lài Miên", price:22000},
 {name:"Gạo Đồng Nở 108", price:16000},
 {name:"Gạo Đồng Dẻo", price:17000},
 {name:"Gạo Gạch", price:18000},
 {name:"Gạo Lứt", price:30000},
 {name:"Gạo 64", price:17000},
 {name:"Gạo Hàm Châu", price:17000},
 {name:"Gạo Móng Chim", price:23000},
 {name:"Gạo Gãy", price:16000},
 {name:"Nếp", price:20000}
];

// Load danh mục
const riceSelect = document.getElementById("rice");
riceCatalog.forEach(r=>{
  let opt = document.createElement("option");
  opt.value = r.name;
  opt.textContent = r.name + " - " + r.price;
  riceSelect.appendChild(opt);
});

function addSale(){
  const riceName = riceSelect.value;
  const qty = Number(document.getElementById("qty").value);
  const customPrice = Number(document.getElementById("price").value);
  const payment = document.getElementById("payment").value;

  if(!riceName || !qty) return alert("Nhập đủ thông tin");

  const rice = riceCatalog.find(r=>r.name===riceName);
  const sellPrice = customPrice || rice.price;
  const total = sellPrice * qty;

  const table = document.getElementById("table");
  const row = table.insertRow();
  row.insertCell(0).innerText = new Date().toLocaleDateString("vi-VN");
  row.insertCell(1).innerText = riceName;
  row.insertCell(2).innerText = qty;
  row.insertCell(3).innerText = sellPrice.toLocaleString();
  row.insertCell(4).innerText = total.toLocaleString();
  row.insertCell(5).innerText = payment;
}
