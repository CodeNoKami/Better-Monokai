// ===============================
// Monokai Theme Test File
// ===============================

// Single-line comment
/* Multi-line
   comment block */

"use strict";

// Variables
const PI = 3.14159;
let count = 0;
var isActive = true;

// Strings
const string = "Hello, Monokai!";
const template = `Count is: ${count}`;
const multiLine = `
This is a
multiline string
`;

// RegEx
const regEx = /^[a-z0-9_-]{3,16}$/gi;

// Numbers
const hex = 0xff;
const binary = 0b101010;
const scientific = 1.23e4;

// Arrays & Objects
const colors = ["red", "green", "blue"];
const user = {
    id: 101,
    name: "Nyi",
    active: true,
    tags: ["dev", "ui", "theme"]
};

// Functions
function greet(name = "World") {
    return `Hello, ${name}!`;
}

const arrowFn = (x, y) => x + y;

// Class
class ThemeTester {
    #privateField = "secret";

    constructor(name) {
        this.name = name;
    }

    log() {
        console.log(`Theme test for ${this.name}`);
    }

    static version() {
        return "1.0.0";
    }
}

// Conditionals
if (isActive && count === 0) {
    console.warn("App is active but count is zero");
} else {
    console.error("Something went wrong");
}

// Loops
for (let i = 0; i < 5; i++) {
    count += i;
}

while (count < 20) {
    count++;
}

// Try / Catch
try {
    JSON.parse("{ invalid json }");
} catch (err) {
    console.error(err.message);
} finally {
    console.log("Done");
}

// Promise / Async
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// Export
export default ThemeTester;

