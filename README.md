<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>商品購入フォーム</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>商品購入フォーム</h1>

<form>
  購入数<br><br>

  いちごジャム<br>
  <select id="StrawberryJam">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  いちじくジャム<br>
  <select id="FigJam">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  さつまいもジャム<br>
  <select id="SweetpotatoJam">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select><br><br>

  マーマレード<br>
  <select id="marmalade">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  味噌<br>
  <select id="miso">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  キムチ<br>
  <select id="kimchi">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  カクテキキムチ<br>
  <select id="kakuteki">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  たけのこの水煮<br>
  <select id="bamboo">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  大根酢漬け<br>
  <select id="RadishPickled">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  大根醤油漬け<br>
  <select id="RadishSoySauce">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  大根ピリ辛醤油漬け<br>
  <select id="RadishSpicySoySauce">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  <p>合計金額：<span id="out">0</span> 円</p>

  <input type="submit" value="送信">
</form>

<script src="script.js"></script>
</body>
</html>
