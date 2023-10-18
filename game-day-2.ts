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

let total = 0

input.map((perimeter) => {
  // Iterate over the array
  // Split the string when x is found
  // Iterate over the arrays and converts strings into numbers
  const [length, width, height] = perimeter.split('x').map((num) => Number(num))
  // console.log(perimeter)
  console.log('Length: ', length, 'Width: ', width, 'Height: ', height)

  let maxValue = Math.max(length, width, height)
  let [min1 = maxValue, min2 = maxValue] = [length, width, height].filter(
    (value) => value != maxValue
  )

  let bowSize = length * width * height
  let ribbonSize = min1 * 2 + min2 * 2
  total += bowSize + ribbonSize
})

console.log('TOTAL for RIBBON and BOW: ', total)
