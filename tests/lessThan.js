import { ok } from 'assert';
import lessThan from '../module/lessThan';

test('#lessThan', () => {
  ok(lessThan(1, 2));
  ok(!lessThan(1, 1));
  ok(!lessThan(2, 1));
});
