import { ok } from 'assert';
import startsWithAt from '../module/startsWithAt';

test('#startsWithAt', () => {
	ok(startsWithAt(2, 'liners', '1-liners/startsWithAt'));
	ok(!startsWithAt(2, 'stoeffel', 'nope'));
});
