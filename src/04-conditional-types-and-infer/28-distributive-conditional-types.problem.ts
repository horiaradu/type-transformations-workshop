import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

// type AppleOrBanana = Fruit extends 'apple' | 'banana'
//   ? 'apple' | 'banana'
//   : never;

type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>];
