import { equal } from 'assert';
import toLowerCase from '../module/toLowerCase';

test('#toLowerCase', () => {
  equal(toLowerCase('SOMETHING UPPERCASE'), 'something uppercase');
  equal(toLowerCase('1-LINERS'), '1-liners');
});
