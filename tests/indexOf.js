import { equal } from 'assert';
import indexOf from '../module/indexOf';

test('#indexOf', () => {
  equal(indexOf('w', 'wow'), 0);
  equal(indexOf('z', '1-liners'), -1);
  equal(indexOf('ine', '1-liners'), 3);
});
