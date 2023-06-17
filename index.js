console.log('Weekly Pay Calculator');

const readline = require('readline');
const hourlyWage = 15;
const baseHours = 40;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What is your name? ", function(name) {
  rl.question("How many hours did you work this week? ", function(hoursWorked) {
    hoursWorked = parseInt(hoursWorked);
    let totalPay = 0;
    let remainingHours = 0;
    if (hoursWorked <= baseHours) {
      totalPay = hoursWorked * hourlyWage;
      remainingHours = baseHours - hoursWorked;
    } else {
      totalPay = baseHours * hourlyWage + (hoursWorked - baseHours) * hourlyWage * 1.5;
      remainingHours = 0;
    }
    console.log(`Hello ${name}, your total pay for the week is $${totalPay}. You have ${remainingHours} hours left to work.`);
    rl.close();
  });
});