import { deepEqual, notDeepEqual } from 'assert';
import put from '../module/put';

test('#put', () => {
	const object = {id: 1};

	deepEqual(put('name', 'stoeffel', object), { id: 1, name: 'stoeffel' });
	notDeepEqual(put('name', 'stoeffel', object), object);
});
