<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>商品購入フォーム</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>  
    <table id="table"></table>
  <div class="all">
    <h1 id="subtitle">商品購入フォーム</h1>
      <form id="myForm">
         <div class="nearlyall">
        購入数
        <br> <br>大根の酢漬（３５０円）<br>
        <select name="RadishPickled" id="RadishPickled">
          <option value="0" selected>0</option>
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select> 
        個
        <br> <br>大根の醤油漬（３５０円）<br>
        <select name="RadishSoySauce" id="RadishSoySauce"> 
          <option value="0" selected>0</option>
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select> 
        個
        <br> <br>大根のピリ辛醤油漬（３５０円）<br> 
         <select name="RadishSpicySoySauce" id="RadishSpicySoySauce"> 
          <option value="0" selected>0</option>
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br> <br>いちごジャム（４５０円）<img   scr="data:image/jpeg;base64,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"><br> 
         <select name="StrawberryJam" id="StrawberryJam"> 
          <option value="0" selected>0</option>
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br><br>いちじくジャム（４５０円）<br>  
        <select name="FigJam" id="FigJam"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option> 
        </select> 
        個
        <br><br>さつまいもジャム（４５０円）<br> 
        <select name="SweetpotatoJam" id="SweetpotatoJam"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br><br>マーマレード（４５０円）<br> 
         <select name="marmalade" id="marmalade"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br><br>味噌（５００円）<br> 
          <select name="miso" id="miso"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br><br>キムチ（５００円）<br> 
         <select name="kimchi" id="kimchi"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select> 
        個
        <br><br>カクテキキムチ（５００円）<br> 
        <select name="kakuteki" id="kakuteki"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
        <br><br>たけのこの水煮（１０００円）<br> 
        <select name="bamboo" id="bamboo"> 
          <option value="0" selected>0</option> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select>  
        個
<br>合計：<span id="out">0</span> 円
        <br><br>お名前（カナ　フルネーム）<br> 
        <input type="text"
id="name"
pattern="^[ァ-ヶー]+$"
title="カタカナで入力してください"
required>
           
<br><br>
        メールアドレス<br> 
        <input type="email" id="email" required><br><br>
       
<br><br>

<button type="button" onclick="clearData()">保存データ削除</button>

 <br><br> 
    <div class="policy">
　プライバシーポリシー 
　当サービスでは、商品のお渡しおよび関連する連絡を行うため、
  <br>お客様の氏名（フルネーム）およびメールアドレスを取得します。 
  <br>取得した個人情報は、以下の目的でのみ利用いたします。 
　<br><br>・商品のお渡し 
  <br>・商品に関する必要なご連絡 
　<br><br>お客様の個人情報は、法令に基づく場合を除き、事前の同意なく第三者へ提供することはありません。 
また、個人情報は利用目的が達成され次第、適切な方法で管理・削除いたします。 
   </div>
  </div><br><input type="checkbox" id="agree" name="agree" required>

    同意する
        <br><input type="submit" value="送信"> 
  </form> 
     </div>
 
  <script>
   
    function exportExcel() {
      const data = [
        ["名前", "メール"],
        [
          document.getElementById("name").value,
          document.getElementById("email").value
        ]
      ];

      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      XLSX.writeFile(wb, "form_data.xlsx");
    }

const ids = [
"StrawberryJam",
  "FigJam",
  "SweetpotatoJam",
  "marmalade",
  "miso",
  "kimchi",
  "kakuteki",
  "bamboo",
  "RadishPickled",
  "RadishSoySauce",
  "RadishSpicySoySauce"
];

const selects = ids
  .map(id => document.getElementById(id))
  .filter(el => el !== null);

const result = document.getElementById("out");

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

function calc() {
  let total = 0;

  selects.forEach(sel => {
    const price = prices[sel.id] || 0;
    const qty = Number(sel.value) || 0;
    total += price * qty;
  });

  result.textContent = total;
}

selects.forEach(sel => {
  sel.addEventListener("change", calc);
});

const fields = document.querySelectorAll("input, select");


function calc(){

let total = 0;

Object.keys(prices).forEach(id=>{

const el = document.getElementById(id);
if(!el) return;

const qty = Number(el.value) || 0;
total += prices[id] * qty;

});

result.textContent = total.toLocaleString();

saveProgress();

}

function saveProgress(){

const data = {};

fields.forEach(el=>{

if(!el.id) return;

if(el.type === "checkbox"){
data[el.id] = el.checked;
}else{
data[el.id] = el.value;
}

});

localStorage.setItem("orderData",JSON.stringify(data));

}

function loadProgress(){

const saved = localStorage.getItem("orderData");
if(!saved) return;

const data = JSON.parse(saved);

fields.forEach(el=>{

if(!el.id) return;

if(data[el.id] === undefined) return;

if(el.type === "checkbox"){
el.checked = data[el.id];
}else{
el.value = data[el.id];
}

});

calc();

}

function clearData(){

  localStorage.removeItem("orderData");

  fields.forEach(el => {

    if (el.tagName === "SELECT") {
      el.value = "0";
    }

    if (el.type === "text" || el.type === "email") {
      el.value = "";
    }

  });

  calc();

}

fields.forEach(el=>{
el.addEventListener("change",calc);
el.addEventListener("input",saveProgress);
});
window.addEventListener("DOMContentLoaded", () => {

  loadProgress();
  calc();

});


</script>

 </body>
</html>
