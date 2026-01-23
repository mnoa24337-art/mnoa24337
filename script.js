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

function calc() {
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

  let total = 0;

  selects.forEach(sel => {
    const price = prices[sel.id] || 0;
    const qty = Number(sel.value) || 0;
    total += price * qty;
  });

  result.textContent = total;
}

selects.forEach(sel =>
  sel.addEventListener("change", calc)
);
