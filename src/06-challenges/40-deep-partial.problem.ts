import { Equal, Expect } from '../helpers/type-utils';

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

type Step1 = DeepPartial<string>;
type Step2 = DeepPartial<{ a: string }>;
type Step3 = DeepPartial<{ a: {} }>;
type Step4 = DeepPartial<{ a: [] }>;
type Step5 = DeepPartial<{ a: { b: string } }>;
type Step6 = DeepPartial<{ a: string[] }>;

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >,
];
