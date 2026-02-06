<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8 <title>"商品購入フォーム"</title> </head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet"href="style.css">
  </head>
  
  <body>  
    <table id="table"></table>
    <div class=all>
    <h1 id="subtitle">商品購入フォーム</h1> 
     <div class= "nearlyall">
      <form> 購入数
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
        <br> <br>いちごジャム（４５０円）<br> 
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
        <select name="Kakuteki" id="kakuteki"> 
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
        <br><p id="out"></p> 円
        <br><br>お名前（カナ　フルネーム）<br> 
        <input type="text"><br><br> 
        メールアドレス<br> 
        <input type="email"><br><br> 　
        </div>
    <div class=policy>
　プライバシーポリシー 
　当サービスでは、商品のお渡しおよび関連する連絡を行うため、
  <br>お客様の氏名（フルネーム）およびメールアドレスを取得します。 
  <br>取得した個人情報は、以下の目的でのみ利用いたします。 
　<br><br>・商品のお渡し 
  <br>・商品に関する必要なご連絡 
　<br><br>お客様の個人情報は、法令に基づく場合を除き、事前の同意なく第三者へ提供することはありません。 
また、個人情報は利用目的が達成され次第、適切な方法で管理・削除いたします。 
        <br></div>
        <br><input type="submit" value="送信"> 
    </div>
      </form> 
    
<script>
fetch("https://docs.google.com/spreadsheets/d/1hM_bDOlLHJwiegbrrwd1x_yyYktFfWRtSbCMhqM0DPo/gviz/tq?tqx=out:csv")

  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n");
    const table = document.getElementById("table");

    rows.forEach(row => {
      const tr = document.createElement("tr");
      row.split(",").forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  });
       
const selecta = document.getElementById("StrawberryJam");
const selectb = document.getElementById("FigJam");
const selectc = document.getElementById("SweetpotatoJam");
const selectd = document.getElementById("marmalade");
const selecte = document.getElementById("miso");
const selectf = document.getElementById("kimchi");
const selectg = document.getElementById("kakuteki");
const selecth = document.getElementById("bamboo");
const selecti = document.getElementById("RadishPickled");
const selectj = document.getElementById("RadishSoySauce");
const selectk = document.getElementById("RadishSpicySoySauce");
const result = document.getElementById("out");
function calc() {
  const a = Number(selecta.value) || 0;
  const b = Number(selectb.value) || 0;
  const c = Number(selectc.value) || 0;
  const d = Number(selectd.value) || 0;
  const e = Number(selecte.value) || 0;
  const f = Number(selectf.value) || 0;
  const g = Number(selectg.value) || 0;  
  const h = Number(selecth.value) || 0;
  const i = Number(selecti.value) || 0;
  const j = Number(selectj.value) || 0;
  const k = Number(selectk.value) || 0;
  result.textContent = ((a + b + c + d) * 450 + (e + f + g) * 500+(i + j + k) * 350
    + h * 1000);
}
[selecta, selectb, selectc, selectd, selecte, selectf, selectg, selecth, selecti, selectj, selectk].forEach((sel) =>
  sel.addEventListener("change", calc),
);
</script>
     
     
    
    </body>
    </html>
