// Has a constructor with the following parameters
	// initialBalance (a number)
	// ownerName (a string)
// Saves those parameters as private fields in your class
// Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
// Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
// Has a **checkBalance** method which prints out the current balance of the account and the account owner's name (pro tip: ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make this a bit cleaner)

class CheckingsAccount {
	private initialBalance: number;
	private ownerName: string;

	constructor(initialBalance: number, ownerName: string) {
		this.initialBalance = initialBalance;
		this.ownerName = ownerName;
	}

	function deposit(amount: number) {
		initialBalance += amount;
	}

	function withdraw(amount: number) {
		initialBalance -= amount;
	}

	function checkBalance() {
		console.log(initialBalance + " " + ownerName);
	}

}

Object acct = new CheckingsAcount(5000, 'Hannah');

