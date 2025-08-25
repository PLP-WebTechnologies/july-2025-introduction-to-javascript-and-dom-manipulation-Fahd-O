// ---------------- Part 1: Variables & Conditionals ----------------
let userName = prompt("Enter your name:"); 
if (userName) {
  document.getElementById("welcome").textContent = "Welcome, " + userName + "!";
} else {
  document.getElementById("welcome").textContent = "Welcome, Guest!";
}

// ---------------- Part 2: Functions ----------------
function calculateTotal(a, b) {
  return a + b;
}

function formatString(str) {
  return str.toUpperCase();
}

// Using functions
console.log("Total: " + calculateTotal(5, 7));
console.log("Formatted: " + formatString("hello world"));

// ---------------- Part 3: Loops ----------------
// Example 1: For loop (countdown)
for (let i = 3; i > 0; i--) {
  console.log("Countdown: " + i);
}

// Example 2: While loop (numbers up to 3)
let j = 1;
while (j <= 3) {
  console.log("While loop number: " + j);
  j++;
}

// ---------------- Part 4: DOM Interactions ----------------
// 1. Toggle message visibility
document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("message");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});

// 2. Generate list dynamically
document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear old items
  let fruits = ["Apple", "Banana", "Mango"];
  fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// 3. Change text content on button click
document.getElementById("toggleBtn").addEventListener("dblclick", function () {
  document.getElementById("message").textContent = "You double-clicked me!";
});