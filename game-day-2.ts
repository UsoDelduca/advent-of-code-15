import fs from 'fs'

const input = fs.readFileSync('day2.txt').toString().split('\n')

function calculate(length: number, width: number, height: number) {
  const lw = 2 * length * width
  const wh = 2 * width * height
  const hl = 2 * height * length
  let smallest: number = 0

  if (lw <= wh && lw <= hl) {
    smallest = lw
    return lw + wh + hl + smallest
  }
  if (wh <= lw && wh <= hl) {
    smallest = wh
    return lw + wh + hl + smallest
  }
  if (hl <= lw && hl <= wh) {
    smallest = hl
    return lw + wh + hl + smallest
  }
  console.log('lwh', lw, wh, hl)
  // const lW = 2 * lw
  // const wH = 2 * wh
  // const hL = 2 * hl
  return lw + wh + hl + smallest
}

const dimensions: number[] = []

input.map((dimension) => {
  const [length, width, height] = dimension.split('x')
  // console.log([length, width, height])
  dimensions.push(
    calculate(parseInt(length), parseInt(width), parseInt(height))
  )
})
console.log('DIMENSIONS 2: ', dimensions[2])
const arrSum = (arr: number[]) => arr.reduce((sum, curr) => sum + curr, 0)

console.log(arrSum(dimensions))
