import { equal } from 'assert';
import join from '../module/join';

test('#join', () => equal(join('-', [1, 'liners']), '1-liners'));
