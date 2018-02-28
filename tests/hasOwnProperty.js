import { equal } from 'assert';
import hasOwnProperty from '../module/hasOwnProperty';

test('#hasOwnProperty', () => {
	let object = {a: 1, b: 2};
	equal(hasOwnProperty('a', object), true);
	equal(hasOwnProperty('c', object), false);
});
