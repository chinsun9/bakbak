# bakbak

> 박박 나나 짜짜

## Install

```sh terminal
yarn add @chinsun9/bakbak --registry https://npm.pkg.github.com/
```

## Usage

```ts example.ts
import { replace, replaceEveryTwoLetter } from '@chinsun9/bakbak';

console.log(replace('대박사건')); // 박박사건

console.log(
  replaceEveryTwoLetter(`대박은 '대박'을 의미하고, 진짜는 '진짜'를 의미한다.`),
); // 대박은 '박박'을 의미하고, 진짜는 '짜짜'를 의미한다.
```
