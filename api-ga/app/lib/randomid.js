function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

module.exports = function(chars) {
	var key = Array()

	var char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	// First character
	key[0] = randomIntInc(0, char.length - 1)

	var result = char[key[0]]

	// Lasts characters
	for(var i = 1; i < chars; i++) {
		key[i] = randomIntInc(0, char.length - 1)

		result += char[key[i]] 
	}

	return result;
}