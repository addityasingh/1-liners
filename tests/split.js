import { deepEqual } from 'assert';
import split from '../module/split';

test('#split', () => deepEqual(split('-', '1-liners'), [1, 'liners']));
