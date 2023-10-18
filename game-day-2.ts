import fs from 'fs'

const input = fs.readFileSync('day2.txt').toString().split('\n')

const dimensions: number[] = []
input.map((dimension) => {
  const [length, width, height] = dimension.split('x')
  // console.log([length, width, height])
  dimensions.push(
    calculate(parseInt(length), parseInt(width), parseInt(height))
  )
})
console.log(dimensions)

function calculate(length: number, width: number, height: number) {
  return 2 * (length * width) + 2 * (width * height) + 2 * (height * length)
}

// function sumAll(arr: number[]){
//   arr.reduce((sum, curr)=> {sum+curr, 0})
// }
