import { equal } from 'assert';
import truncate from '../module/truncate';

test('#truncate', () => {
  equal(truncate('hallo', 6), 'hallo');
  equal(truncate('hallo', 4), 'hal…');
  equal(truncate('hallo', 1), '…');
});
