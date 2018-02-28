import { ok } from 'assert';
import lessOrEqual from '../module/lessOrEqual';

test('#lessOrEqual', () => {
  ok(lessOrEqual(1, 2));
  ok(lessOrEqual(1, 1));
  ok(!lessOrEqual(2, 1));
});
