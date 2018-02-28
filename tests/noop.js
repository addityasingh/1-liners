import {
	ok
}
from 'assert';
import noop from '../module/noop';

test('#noop', () => {
	ok(typeof noop === 'function');
	ok(noop() === undefined);
});
