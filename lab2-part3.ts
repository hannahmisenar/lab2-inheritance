class CheckingsAccount {

	WITHDRAWAL_MAX: number;
	withdrawalCount: number;	
	private initialBalance: number;
	private ownerName: string;

	constructor(initialBalance: number, ownerName: string) {
		this.initialBalance = initialBalance;
		this.ownerName = ownerName;
		WITHDRAWAL_MAX = 3;
		withdrawalCount = 0;
	}

	function deposit(amount: number) {
		initialBalance += amount;
	}

	function withdraw(amount: number) {
		if (withdrawalCount = 3) {
			console.log("You have reached your maximum of " + WITHDRAWAL_MAX + "withdrawals today");
			return;
		}
		initialBalance -= amount;
		withdrawalCount++;
	}

	function checkBalance() {
		console.log(initialBalance + " " + ownerName);
	}

	Object acct = new SavingsAcount(5000, 'Hannah');
	
}