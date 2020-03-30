![](https://github.com/Noisy96/Cash-Register/blob/master/images/cover.jpg)

# Cash-Register 
A challenge I particularly enjoyed taking <br>
link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


## Challenge description
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

* Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

* Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

* Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

## Currency units table

| Currency Unit        | Amount        |
| ---------------------|:-------------:|
| Penny                | __$0.01__ (PENNY) |
| Nickel               | __$0.05__ (NICKEL)|
| Dime                 | __$0.1__ (DIME)   |
| Quarter              | __$0.25__ (QUARTER)      |
| Dollar               | __$1__ (DOLLAR)      |
| Five Dollars         | __$5__ (FIVE)      |
| Ten Dollars          | __$10__ (TEN)      |
| Twenty Dollars       | __$20__ (TWENTY)      |
| One-hundred Dollars  | __$100__ (ONE HUNDRED)      |

## Input/Output samples
```javascript
// input
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// output
{status: "OPEN", change: [["QUARTER", 0.5]]}
```

```javascript
// input
(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// output
{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5],
["DIME", 0.2], ["PENNY", 0.04]]}
```

```javascript
// input
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1],
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// output
{status: "INSUFFICIENT_FUNDS", change: []}
```

### And it earned me this so it was pretty fun 😁
(Along with other challenges of course)
![](https://github.com/Noisy96/Cash-Register/blob/master/images/certificiation.png)
