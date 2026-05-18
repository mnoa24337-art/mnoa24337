  <script>
// ===== 要素取得 =====
const form = document.getElementById("myForm");
const msg = document.getElementById("message");
const result = document.getElementById("out");
const fields = document.querySelectorAll("input, select");

// ===== 商品価格 =====
const prices = {
  StrawberryJam: 450,
  FigJam: 450,
  SweetpotatoJam: 450,
  marmalade: 450,
  miso: 500,
  kimchi: 500,
  kakuteki: 500,
  bamboo: 1000,
  RadishPickled: 350,
  RadishSoySauce: 350,
  RadishSpicySoySauce: 350
};

// ===== 合計計算 =====
function calc() {
  let total = 0;

  Object.keys(prices).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const qty = Number(el.value) || 0;
    total += prices[id] * qty;
  });

  result.textContent = total.toLocaleString();
}

// ===== 保存 =====
function saveProgress() {
  const data = {};

  fields.forEach(el => {
    if (!el.id) return;

    if (el.type === "checkbox") {
      data[el.id] = el.checked;
    } else {
      data[el.id] = el.value;
    }
  });

  localStorage.setItem("orderData", JSON.stringify(data));
}

// ===== 復元 =====
function loadProgress() {
  const saved = localStorage.getItem("orderData");
  if (!saved) return;

  const data = JSON.parse(saved);

  fields.forEach(el => {
    if (!el.id) return;
    if (data[el.id] === undefined) return;

    if (el.type === "checkbox") {
      el.checked = data[el.id];
    } else {
      el.value = data[el.id];
    }
  });
}

// ===== 注文済みチェック =====
function checkSubmitted() {
  if (localStorage.getItem("ordered")) {
    form.querySelectorAll("input, select, button").forEach(el => {
      el.disabled = true;
    });
    msg.textContent = "すでに注文済みです";
  }
}

// ===== リセット =====
function clearData() {
  localStorage.removeItem("orderData");
  localStorage.removeItem("ordered");

  fields.forEach(el => {
    if (el.type === "checkbox") {
      el.checked = false;
    } else if (el.tagName === "SELECT") {
      el.value = "0";
    } else {
      el.value = "";
    }

    el.disabled = false;
  });

  msg.textContent = "";
  calc();
}

// ===== イベント設定 =====
fields.forEach(el => {
  el.addEventListener("change", () => {
    calc();
    saveProgress();
  });

  el.addEventListener("input", saveProgress);
});

// ===== 送信処理 =====
form.addEventListener("submit", function(e) {
  e.preventDefault();

  localStorage.setItem("ordered", "true");

  msg.textContent = "注文が完了しました";
  checkSubmitted();
});

// ===== 初期化 =====
window.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  calc();
  checkSubmitted();
});
</script>

selects.forEach(sel => {
  sel.addEventListener("change", calc);
});


calc();
