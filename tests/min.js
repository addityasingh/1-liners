import {equal} from 'assert';
import min from '../module/min';

test('#min', () => {
	equal(min(3, 6), 3);
	equal(min(6, 3), 3);

	equal([3, 6, 1].reduce(min), 1);
});
