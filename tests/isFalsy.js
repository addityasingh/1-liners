import {ok} from 'assert';
import isFalsy from '../module/isFalsy';

test('#isFalsy', () => {
	ok(!isFalsy('yes'));
	ok(!isFalsy(true));
	ok(!isFalsy([]));

	ok(isFalsy(''));
	ok(isFalsy(0));
	ok(isFalsy(false));
});
