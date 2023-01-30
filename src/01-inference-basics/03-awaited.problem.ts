import { Equal, Expect } from '../helpers/type-utils';

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

// type Awaited<T> = T extends Promise<infer U> ? U : T;

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
