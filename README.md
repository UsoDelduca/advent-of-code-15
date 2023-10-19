# advent-of-code-15
This is my attempt to solve one of the Advent of Code puzzle using TypeScript

## Disclaimer

I'm not new to Typescript, but I'm also a junior developer  
Learning to debug is part of a developer's career and I'm challenging myself to learn how to debug better and faster  
The way I see it, the more I see the same errors on screen, the easier it will be for me to fix them

## Start project
- To make this work, first I had to set up the TS packages
- Install dependencies
- Figure out why TS wasn't running on Node
- Change tsconfig.json and package.json files
- Run and see the console.log on Node

## Day #1
The main issue was to figure out how to read the input  
The logic wasn't that hard to figure out

## Day #2 (part 1)
Again, the issues was to use the input data  
It took me a little while to find a solution by reading a few forums  
The logic was a bit simple, although I was multiplying by 2 at the wrong time  
After a few attempts and some console.logs I managed to get the rigth answer

## Day #2 (part 2)  

After finding the ~right~ answer for the amount of bow length needed, I go stuck at finding the amount of ribbon  
While browsing for something online, I realised I misread the instructions to how to find the length of bow needed  
So, I went back to my previous solution and changed it to the ACTUAL right one  
  
## Day #3 (part 1)

Got somewhere figuring out the positions  of [x,y] resulting in [41 , -95]
Spent some time trying to figure out what to do with those coordenates
Came across a github repo with a Javascript solution, but the code was hard to understand
Asked chatgpt to explain and 'convert' to Typescript
Learned to create a new Set<string>() (https://www.typescriptlang.org/docs/handbook/utility-types.html) and Set.prototype.add() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add) unique elements to the new Set
Also learned I can use Set.prototype.size to count how many unique elements are there in the Set

