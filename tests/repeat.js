import { equal } from 'assert';
import repeat from '../module/repeat';

test('#repeat', () => {
  equal(repeat(1, 'hallo'), 'hallo');
  equal(repeat(2, 'große'), 'großegroße');
});
