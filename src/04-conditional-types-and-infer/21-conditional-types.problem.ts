import { Equal, Expect } from '../helpers/type-utils';

type Greeting = 'hello' | 'goodbye';

type YouSayGoodbyeAndISayHello<T extends Greeting> = T extends 'hello'
  ? 'goodbye'
  : 'hello';

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
];
