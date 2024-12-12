function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Using join to concatenate the array elements
console.log(greeter(user.join(" "))); // Output: Hello, Jane Doe

//Solution 2: Accessing the first element of the array
console.log(greeter(user[0])); // Output: Hello, Jane