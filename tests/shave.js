import { equal } from 'assert';
import shave from '../module/shave';

test('#shave', () => equal(shave(1, parseInt)(2.2, 2), 2));
