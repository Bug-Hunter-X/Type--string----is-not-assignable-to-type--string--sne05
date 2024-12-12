# Type 'string[]' is not assignable to type 'string'
This repo contains a demonstration of a common TypeScript error: assigning an array of strings to a string variable.

The bug is present in `bug.ts`. The solution is shown in `bugSolution.ts`.

## Problem
The TypeScript compiler will throw an error when trying to pass a string array to a function expecting a single string.

## Solution
The solution depends on the desired behavior.  If you need to concatenate the array elements into a single string, you can use the `join()` method. If you only need the first element, use array indexing.