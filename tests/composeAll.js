import { equal } from 'assert';
import composeAll from '../module/composeAll';

test('#composeAll', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;
	const addFive = x => x + 5;
	const multiplyByFour = x => x * 4;
	const square =  x => x * x;
	const substractTwo = x => x - 2;

	equal(composeAll(f, g)(1, 2), f(g(1, 2)));
	equal(composeAll(h, f, g)(1, 2), h(f(g(1, 2))));

	equal(composeAll(addFive, substractTwo)(2), 5);
	equal(composeAll(addFive, square, multiplyByFour)(3), 149);
	equal(composeAll(
		addFive,
		substractTwo,
		square,
		multiplyByFour
	)(2), 67);
});
