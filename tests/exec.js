import { equal } from 'assert';
import exec from '../module/exec';
import curry from '../module/curry';
import join from '../module/join';

const stringify = curry(join)('\0');

test('#test', () => {
	const haystack = 'hAyHAYhayneEdLEHayHAy';

	equal(
		stringify(exec(haystack, /needle/i)),
		stringify(['neEdLE'])
	);

	equal(
		stringify(exec(haystack, /n(.+)e/i)),
		stringify(['neEdLE', 'eEdL'])
	);

	equal(
		exec(haystack, /needle/),
		null
	);
});
