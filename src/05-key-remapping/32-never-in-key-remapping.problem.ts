import { Equal, Expect } from '../helpers/type-utils';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type SearchForId = `${string}Id` | 'id';

// type AllKeys<T> = keyof T;
// type OnlyId<T> = Extract<AllKeys<T>, SearchForId>;
// type OnlyIdKeys<T> = {
//   [K in OnlyId<T>]: T[K];
// };

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K];
};
type Foo = OnlyIdKeys<Example>;

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
