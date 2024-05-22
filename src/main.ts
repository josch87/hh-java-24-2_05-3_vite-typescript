const age: number = 17;

for (let i: number = 1; i <= age; i++) {
    console.log(i)
}

if (age > 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

const score: number = 0;

if (score) {
    console.log("Score is available")
}

if (score) {
    console.log("Score is evaluated as truthy.")
} else {
    console.log("Score is evaluated as falsy.")
}

const username: string = "";

if (username) {
    console.log("Username is available.")
}

if (username) {
    console.log("Username is evaluated as truthy.")
} else {
    console.log("Username is evaluated as falsy")
}

const isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy")
}

if (!isAdmin) {
    console.log("isAdmin is false.")
}


function printChristmasTree(n: number) {
    const tree: string = `
        *
       ***
      *****
     *******
    *********
        *
        *
        *
        *
        * 
        `
    if (n === 5) {
        console.log(tree);
    }
}

printChristmasTree(5);