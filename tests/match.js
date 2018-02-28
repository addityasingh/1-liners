import { deepEqual } from 'assert';
import match from '../module/match';

test('#match', () => deepEqual(match(/\d+/g, '1.2.3.4.5'), ["1","2","3","4","5"]));
