
function bubbleSort(arr) {

    for (let j = arr.length - 1; j > 0; j--) {

        for (let i = 0; i < j; i++) {

            if (arr[i] > arr[i + 1]) {

                let temp = arr[i];

                arr[i] = arr[i + 1];

                arr[i + 1] = temp;
            }
        }
    }
}

console.log(bubbleSort([12, 231, 1, 42]))




function generatePass() {
	let pass = '';
	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
		'abcdefghijklmnopqrstuvwxyz0123456789@#$';

	for (let i = 1; i <= 8; i++) {
		let char = Math.floor(Math.random() * str.length + 1);

		pass += str.charAt(char)
	}
	return pass;
}
console.log(generatePass());
