//======================================================
//1st Strategies:
function baseStrategy(amount) {
	return amount
}
function premiumStrategy(amount) {
	return amount * 0.85
}
function platinumStrategy(amount) {
	return amount * 0.65
}
//======================================================
//2nd Context:
class AutoCart {
	constructor(discount) {
		this.discount = discount
		this.amount = 0
	}

	checkout() {
		return this.discount(this.amount)
	}

	setAmount(amount) {
		this.amount = amount
	}
}
//======================================================
//3 Using:
//Creating strategies:
const baseCustomer = new AutoCart(baseStrategy)
const premiumCustomer = new AutoCart(premiumStrategy)
const platinumCustomer = new AutoCart(platinumStrategy)

//Creating cases:
baseCustomer.setAmount(50000)
console.log(baseCustomer.checkout())

premiumCustomer.setAmount(50000)
console.log(premiumCustomer.checkout())

platinumCustomer.setAmount(50000)
console.log(platinumCustomer.checkout())
