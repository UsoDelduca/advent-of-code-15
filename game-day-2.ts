import fs from 'fs'

const input = fs.readFileSync('day2.txt').toString().split('\n')

function calculate(length: number, width: number, height: number) {
  const lw = length * width
  const wh = width * height
  const hl = height * length
  let smallest: number = Math.min(lw, wh, hl)

  console.log('lwh', lw, wh, hl)

  return 2 * lw + 2 * wh + 2 * hl + smallest
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
