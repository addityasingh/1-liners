import { equal } from 'assert';
import last from '../module/last';

test('#last', () => {
	equal(last([1, 2, 3]), 3);
});
