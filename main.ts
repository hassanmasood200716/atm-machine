#! /usr/bin/env node

import inquirer from "inquirer";

let myPin = 1234;
let myBalance = 10000; //dollar

const pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("you have entered correct pin code");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "plz select a option",
      type: "list",
      choices: [
        "balance inquiry",
        "withdraw",
        "funds transfer",
        "bill payment",
      ],
    },
  ]);


  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount to withdraw",
        type: "number",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log("Your remaining balance is:" + myBalance);


    } else console.log("you do not have in sufficient balance");
    
  } else if (operationAns.operation === "balance inquiry") {
    console.log("your balance is:" + myBalance);


  } else if (operationAns.operation === "funds transfer") {
    const bankAns = await inquirer.prompt([
      {
        name: "banks",
        message: "choose the bank you want to transfer",
        type: "list",
        choices: [
          "bank al habib",
          "allied bank",
          "faysal bank",
          "ubl bank",
          "meezan bank",
        ],
      },
    ]);

    const benaficaryAns = await inquirer.prompt([
      {
        name: "benaficary",
        message: "enter your benaficary name",
        type: "input",
      },
    ]);
    const benaficaryAccount = await inquirer.prompt([
      {
        name: "accountnumber",
        message: "enter your benaficary account number",
        type: "number",
      },
    ]);
    const fundstotransfer = await inquirer.prompt([
      {
        name: "amounttotransfer",
        message: "enter amount of fund to transfer",
        type: "number",
      },
    ]);

    if (fundstotransfer.amounttotransfer <= myBalance) {
      myBalance -= fundstotransfer.amounttotransfer;
      console.log("Your remaining balance is:" + myBalance);
      console.log(
        "we have transfered your funds successfully to  " +
          benaficaryAns.benaficary +
          " in " +
          benaficaryAccount.accountnumber
      );
    } else {
      console.log("you do not have enough fund to transfer");
    }
  } else if (operationAns.operation === "bill payment") {
    const billsAns = await inquirer.prompt([
      {
        name: "bills",
        message: "choose the utility bill you want to pay",
        type: "list",
        choices: ["k.electric", "sui southern gas"],
      },
    ]);
    const billsAccount = await inquirer.prompt([
      {
        name: "billnumber",
        message: "enter your bill account number",
        type: "number",
      },
    ]);
    const billsAmount = await inquirer.prompt([
      {
        name: "amountOfBills",
        message: "enter your bill amount",
        type: "number",
      },
    ]);
    if (billsAmount.amountOfBills <= myBalance) {
      myBalance -= billsAmount.amountOfBills;
      console.log("Your remaining balance is:" + myBalance);
      console.log(
        "we have successfully paid bill of  " + billsAccount.billnumber
      );
    } else {
      console.log("you do not have enough fund to pay the bill");
    }
  }
} else {
  console.log("you have entered wrong pin code");
}