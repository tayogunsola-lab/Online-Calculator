function toNumber(value) {
  const num = Number(value)
  if (Number.isNaN(num)) {
    throw new Error('Enter valid numbers.')
  }
  return num
}

function add(a, b) {
  return toNumber(a) + toNumber(b)
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b)
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b)
}

function divide(a, b) {
  const denominator = toNumber(b)
  if (denominator === 0) {
    throw new Error('Eror')
  }
  return toNumber(a) / denominator
}

export default {
  add,
  subtract,
  multiply,
  divide
}
