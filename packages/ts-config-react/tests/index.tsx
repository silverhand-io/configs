import bar from './FooBar';

export type Optional<T> = T | undefined;

const foo = async () => {
  console.log(bar.aa);
  [1].reduce((accumulator, aa) => accumulator + aa, 0);

  return new Promise((resolve) => {
    resolve(true);
  });
};

void foo();
