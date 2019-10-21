module.exports = {
	setCoins: function(userID, amount) {
	  if(typeof(amount) != "number"){
		  return console.error('Input Error,', "amount is not of type number");
	  }
	  
	  let fs = require('fs');
	  let coins = JSON.parse(fs.readFileSync('../coins.json', 'UTF8') || '{}');
	  

	  if(!coins[userID]){
		coins[userID] = {
			coins: 0
		}
	}

	  coins[userID].coins = amount;

	  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {

		if (err) console.log(err)
	
	  });

	},
	getCoins: function(userID) {
		let fs = require('fs')
		let coins = JSON.parse(fs.readFileSync('./coins.json', 'UTF8') || '{}');

		if(!coins[userID]){
			coins[userID] = {
				coins: 0
			}
			fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {

				if (err) console.log(err)
			
			  });
		}
		
		console.log(coins)
		return coins[userID].coins;
	}
  };