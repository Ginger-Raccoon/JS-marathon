const form = document.forms.form;

function getRow(firstRow, secondRow, symbol) {

  function getSymbol(row, symbol) {
  let result = 0;
    for (let i = 0; i < row.length; i++) {
      if (row.charAt(i) == symbol) {
        result += 1
      }
    }
    return result
  }

  if (getSymbol(firstRow, symbol) > getSymbol(secondRow, symbol)) {
    return alert(firstRow)
  } else {
    return alert(secondRow)
  }
}

document.querySelector('.button').addEventListener('click', function(event) {
  event.preventDefault();
  const firstRow = form.elements.firstString.value
  const secondRow = form.elements.secondString.value
  const symbol = form.elements.symbol.value
  getRow(firstRow, secondRow, symbol);
})