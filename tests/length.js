import { equal } from 'assert';
import length from '../module/length';

test('#length', () => equal(length([0, 1, 2]), 3));
