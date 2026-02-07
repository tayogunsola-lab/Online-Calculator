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
  const numerator = toNumber(a)
  const denominator = toNumber(b)
  if (denominator === 0) {
    throw new Error(`Error: ${numerator} is indivisible by zero`)
  }
  return numerator / denominator
}

export default {
  toNumber,
  add,
  subtract,
  multiply,
  divide
}
