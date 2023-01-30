import { Equal, Expect } from '../helpers/type-utils';

const myFunc = () => {
  return 'hello';
};

const anotherFunc = () => 42;

// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;
type AnotherFuncReturn = ReturnType<typeof anotherFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
