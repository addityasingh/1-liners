import { deepEqual } from 'assert';
import concat from '../module/concat';

test('#concat', () => {
	deepEqual(
		concat('are', [1, 'liners']),
		[1, 'liners', 'are']
	);

	deepEqual(
		concat(['are'], [1, 'liners']),
		[1, 'liners', 'are']
	);

	deepEqual(
		concat(['are', 'great'], [1, 'liners']),
		[1, 'liners', 'are', 'great']
	);
});
