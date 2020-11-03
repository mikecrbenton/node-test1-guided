// `...` gives us all of our parameter values as an array,
// regardless of how many parameters are passed
function sum(...values) {
	// https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
	return values.reduce((a, b) => a + b, 0)
}

function difference(...values) {
	return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

function product(...values) {
	return values.reduce((a, b) => a * b, 1)
}

function quotient(...values) {
	if (values.slice(1).indexOf(0) > -1) {
		throw new Error("Cannot divide by zero")
	}
	return values.slice(1).reduce((a, b) => a / b, values[0] || 0)
}

function parse(data) {
	const result = {}

	if (Array.isArray(data.sum)) {
		// using the spread operator here (`...`) takes the array value and
		// spreads it out as parameters. Like calling sum(data.sum[0], data.sum[1], data.sum[2])
		result.sum = sum(...data.sum)
	}
	if (Array.isArray(data.difference)) {
		result.difference = difference(...data.difference)
	}
	if (Array.isArray(data.product)) {
		result.product = product(...data.product)
	}
	if (Array.isArray(data.quotient)) {
		result.quotient = quotient(...data.quotient)
	}

	return result
}

module.exports = {
	sum,
	difference,
	product,
	quotient,
	parse,
}
