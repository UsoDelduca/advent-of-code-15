import fs from 'fs'

const input = fs.readFileSync('day2.txt').toString().split('\n')

// PART 1 //

function calculate(length: number, width: number, height: number) {
  const lw = length * width
  const wh = width * height
  const hl = height * length
  let smallest: number = Math.min(lw, wh, hl)

  // console.log('lwh', lw, wh, hl)

  return 2 * lw + 2 * wh + 2 * hl + smallest
}

const dimensions: number[] = []

input.map((dimension) => {
  const [length, width, height] = dimension.split('x')
  // console.log([length, width, height])
  dimensions.push(calculate(Number(length), Number(width), Number(height)))
})
// console.log('DIMENSIONS 2: ', dimensions[2])
const arrSum = (arr: number[]) => arr.reduce((sum, curr) => sum + curr, 0)

console.log('GIFT WRAP TOTAL: ', arrSum(dimensions))

// PART 2 //
const dimensionsArr: any[] = []
const bowArr: number[] = []

input.map((perimeter) => {
  const [length, width, height] = perimeter.split('x')
  dimensionsArr.push([Number(length), Number(width), Number(height)])
  bowArr.push(Number(length), Number(width), Number(height))
})
// TOTAL for Ribbons
console.log(
  'TOTAL length for BOWS: ',
  bowArr.reduce((sum: number, curr: number) => sum + curr)
)

dimensionsArr.map((dimension) => {})
