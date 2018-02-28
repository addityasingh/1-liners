import { ok } from 'assert';
import endsWithAt from '../module/endsWithAt';

test('#endsWithAt', () => {
	ok(endsWithAt(8, 'liners', '1-liners/endsWithAt'));
	ok(!endsWithAt(2, 'stoeffel', 'nope'));
});
