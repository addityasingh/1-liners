import { ok } from 'assert';
import startsWith from '../module/startsWith';

test('#startsWith', () => {
	ok(startsWith('1', '1-liners'));
	ok(!startsWith('stoeffel', 'nope'));
});
