import { equal } from 'assert';
import charAt from '../module/charAt';

test('#charAt', () => {
  equal(charAt(0, 'hallo'), 'h');
  equal(charAt(3, 'große'), 'ß');
});
