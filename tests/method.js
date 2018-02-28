import { equal } from 'assert';
import method from '../module/method';

test('#method', () => {
	const object = {
		base: 1,
		add(number) { return this.base + number; },
	};

	equal(
		method('add', object)(5),
		6
	);
});
