type MapItem = [string, string][];

// 3글자 이상 특수한 경우
const targetString3: MapItem = [
  ['대박쓰', '박쓰'],
  ['진짜루', '짜루'],
  ['진짜냐', '짜냐'],
];

// 2글자
const targetString2: MapItem = ['대박', '진짜', '존나'].map((str) => [
  str,
  str[1].repeat(2),
]);

const map = new Map<string, string>([...targetString3, ...targetString2]);
const regexp = new RegExp([...map.keys()].join('|'), 'g');

const replace = (str: string) =>
  str.replace(regexp, (sub, ...args) => {
    console.log({ sub, args });
    return map.get(sub)!;
  });

export { replace };
