interface GenericIdentityFn<T> {
  (arg: T): T;
}

const IdentifyNumbers: GenericIdentityFn<number> = (arg) => arg;
const IdentifyString: GenericIdentityFn<string> = (arg) => arg;
const IdentifyObject: GenericIdentityFn<object> = (arg) => arg;
