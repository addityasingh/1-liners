import { deepEqual } from 'assert';
import identity from '../module/identity';

test('#identity', () => {
  deepEqual(identity(true), true);
  deepEqual(identity("string"), "string");
  deepEqual(identity(1), 1);
  deepEqual(identity({ foo: 1 }), { foo: 1 });
  deepEqual(identity([42]), [42]);
});
