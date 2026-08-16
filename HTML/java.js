//Arithmetic Operators
let x = 5;
let y = 2;
let add = x + y;
document.getElementById("add").innerHTML = "The sum of x + y is: " + add;
let sub=x-y;
document.getElementById("sub").innerHTML = "The difference of x - y is: " + sub;
let mul=x*y;
document.getElementById("mul").innerHTML = "The product of x * y is: " + mul;
let div=x/y;
document.getElementById("div").innerHTML = "The quotient of x / y is: " + div;  
let mod=x%y;
document.getElementById("mod").innerHTML = "The remainder of x % y is: " + mod;
let exponentiation=x**y;
document.getElementById("exp").innerHTML = "The result of x ** y is: " + exponentiation;
let increment=++x;
document.getElementById("inc").innerHTML = "The increment of x is: " + increment;
let decrement=--y;
document.getElementById("dec").innerHTML = "The decrement of y is: " + decrement;


//Assignment Operator
let a = 10;
let b = 5;
let c = a + b;
document.getElementById("ass").innerHTML = "The value of c after assignment is: " + c;
let d = 20;
d += 5;
document.getElementById("a_ass").innerHTML = "The value of d after addition with 5 is: " + d;
d-= 5;
document.getElementById("s_ass").innerHTML = "The value of d after subtraction with 5 is: " + d;
d*= 2;
document.getElementById("m_ass").innerHTML = "The value of d after multiplication with 2 is: " + d;
d/= 2;
document.getElementById("d_ass").innerHTML = "The value of d after division with 2 is: " + d;


//Logical And Comparison Operators
let p = 10;
let q = 5;
p&&q;
document.getElementById("and").innerHTML = "The result of p && q is: " + (p && q);
p||q;
document.getElementById("or").innerHTML = "The result of p || q is: " + (p || q);


//Comparison Operators
let r = 10;
let s = 5;
r==s;
document.getElementById("eq").innerHTML = "The result of r == s is: " + (r == s);
r!=s;
document.getElementById("neq").innerHTML = "The result of r != s is: " + (r != s);
r>s;
document.getElementById("gt").innerHTML = "The result of r > s is: " + (r > s);
r<s;
document.getElementById("lt").innerHTML = "The result of r < s is: " + (r < s);
r>=s;
document.getElementById("gte").innerHTML = "The result of r >= s is: " + (r >= s);
r<=s;
document.getElementById("lte").innerHTML = "The result of r <= s is: " + (r <= s);


//If else statement
let age = 18;
if (age >= 18) {
    document.getElementById("if").innerHTML = "You are eligible to vote.";
}
else {
    document.getElementById("if").innerHTML = "You are not eligible to vote.";
}


//If elseif else statement
let marks = 75;
if (marks >= 90) {
    document.getElementById("elseif").innerHTML = "You got an A grade.";
}
else if (marks >= 80) {
    document.getElementById("elseif").innerHTML = "You got a B grade.";
}
else {
    document.getElementById("elseif").innerHTML = "You got a C grade.";
}


//Ternary Operator
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
document.getElementById("ternary").innerHTML = "The number is: " + result;


//Switch Statement
let day = 3;
switch (day) {
    case 1:
        document.getElementById("switch").innerHTML = "It's Monday.";
        break;
    case 2:
        document.getElementById("switch").innerHTML = "It's Tuesday.";
        break;
    case 3:
        document.getElementById("switch").innerHTML = "It's Wednesday.";
        break;
    default:
        document.getElementById("switch").innerHTML = "Invalid day.";
}


//Boolean Operators
let bool1 = true;
let bool2 = false;
document.getElementById("bool").innerHTML = "The value of bool1 is: " + bool1 + " and the value of bool2 is: " + bool2;


// Loops: for, while, do-while
{
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += i + (i < 4 ? ', ' : '');
  }
  document.getElementById('for').textContent = 'for: ' + out;
}
{
  let out = '';
  let j = 0;
  while (j < 5) {
    out += j + (j < 4 ? ', ' : '');
    j++;
  }
  document.getElementById('while').textContent = 'while: ' + out;
}
{
  let out = '';
  let k = 0;
  do {
    out += k + (k < 4 ? ', ' : '');
    k++;
  } while (k < 5);
  document.getElementById('dowhile').textContent = 'do...while: ' + out;
}

//Function
function greet(name) {
    return "Hello, " + name + "!";
}