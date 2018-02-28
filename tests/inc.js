import { equal } from 'assert';
import inc from '../module/inc';

test('#inc', () => equal(inc(0), 1));
