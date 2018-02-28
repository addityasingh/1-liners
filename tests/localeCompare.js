import { equal } from 'assert';
import localeCompare from '../module/localeCompare';

test('#localeCompare', () => {
  equal(localeCompare('B', 'A'), -1);
  equal(localeCompare('A', 'B'), 1);
  equal(localeCompare('A', 'A'), 0);
});
