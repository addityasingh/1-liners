import { ok } from 'assert';
import endsWith from '../module/endsWith';

test('#endsWith', () => {
	ok(endsWith('liners', '1-liners'));
	ok(!endsWith('stoeffel', 'nope'));
});
