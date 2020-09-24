function getRow(firstRow, secondRow) {
  function getSymbol(row, symbol) {
  let result = 0;
    for (let i = 0; i < row.length; i++) {
      if (row.charAt(i) == symbol) {
        result += 1
      }
    }
    return result
  }
  if (getSymbol(firstRow, 'a') > getSymbol(secondRow, 'a')) {
    return firstRow
  } else {
    return secondRow
  }
}