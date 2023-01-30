import { S } from 'ts-toolbelt';
import { Equal, Expect } from '../helpers/type-utils';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type SplitPath<Path extends string> = S.Split<Path, '/'>;
type Step1 = SplitPath<UserPath>;

type IsParam<Segment> = Segment extends `:${infer Id}` ? Id : never;
type Step2 = IsParam<':id'>;
type Step3 = IsParam<'users'>;

type PathParams<Params extends string[]> = {
  [K in Params[number] as IsParam<K>]: string;
};
type Step4 = PathParams<Step1>;

type ExtractPathParams<Path extends string> = {
  [K in SplitPath<Path>[number] as IsParam<K>]: string;
};
type FinalStep = ExtractPathParams<UserPath>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
