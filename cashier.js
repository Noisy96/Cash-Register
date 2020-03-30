// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  let result = {
    status : "",
    change: []
  };

  // STAGE ONE
  // calculating how much cash we have
  let cashAvailable = 0;
  cid.forEach((v) => (cashAvailable+=v[1]));
  cashAvailable = cashAvailable.toPrecision(5);

  // calculating how much change we have to provide
  let changeRequired = cash - price;

  // determining the status of the operation
  result.status = cashAvailable > changeRequired ?
                  "OPEN" : cashAvailable == changeRequired ?
                  "CLOSED" : "INSUFFICIENT_FUNDS";

  // STAGE TWO
  const unitsTable = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  if (result.status == "CLOSED") {
    result.change = cid;
  }
  else if(result.status == "OPEN") {
    for(let i=cid.length-1; i>=0; i--) {
      if(changeRequired >= unitsTable[i]) {

        let numberOfCoinsINeed = parseInt(changeRequired / unitsTable[i]);
        let numberOfCoinsIHave = cid[i][1] / unitsTable[i];

        let numberOfCoins = numberOfCoinsINeed > numberOfCoinsIHave ?
                            numberOfCoinsIHave :
                            numberOfCoinsINeed ;

        changeRequired = changeRequired - unitsTable[i]*numberOfCoins;
        // JS has a value precision issue of some sort and I gotta keep moderating it
        // with the line right here
        changeRequired = changeRequired.toPrecision(5);
        
        result.change.push([cid[i][0],numberOfCoins*unitsTable[i]]);
      }
    }

    // leaving the loop with the changeRequired value not equal to 0 means
    // the process of finding the appropriate combination of coins failed
    if(changeRequired!=0) return {status : "INSUFFICIENT_FUNDS", change : []};
  }

  return result;  
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
