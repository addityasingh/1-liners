import { equal } from 'assert';
import times from '../module/times';

test('#times', () => equal(times(2, 3), 6));
