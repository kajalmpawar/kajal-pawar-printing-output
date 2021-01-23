let a = 3;
let b = 5;
let c;
let first_name = "Kajal";
let last_name = "Pawar";
let email = "pawa0014@algonquinlive.com"
let string = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + " ."


let output = '';
output += 'let a = 3;';
output += '\n';
output += 'let b = 5;';
output += '\n';
output += 'let c;';
output += '\n';
output += '------------------';
output += '\n';
output += 'a + b = ' + (a + b);
output += '\n';
output += 'a - b = ' + (a - b);
output += '\n';
output += 'a * b = ' + (a * b);
output += '\n';
output += 'a / b = ' + (a / b);
output += '\n';
output += 'a % b = ' + (a % b);
output += '\n';
output += '(a += b):' + (a += b);
output += '\n';
output += '(a -= b):' + (a -= b);
output += '\n';
output += '(a *= b):' + (a *= b);
output += '\n';
output += '(a /= b):' + (a /= b);
output += '\n';
output += '(a %= b):' + (a %= b);
output += '\n';
output += '(a == b):' + (a == b);
output += '\n';
output += '(a != b):' + (a != b);
output += '\n';
output += '(a > b):' + (a > b);
output += '\n';
output += '(a < b):' + (a < b);
output += '\n';
output += '(!a && !c):' + (!a && !c);
output += '\n';
output += '(!a || !c ):' + (!a || !c );
output += '\n';
output += string;

alert(output);