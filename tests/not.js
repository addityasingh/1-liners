import { ok } from 'assert';
import not from '../module/not';

test('#not', () => {
	ok(!not(true));
	ok(not(false));
});
