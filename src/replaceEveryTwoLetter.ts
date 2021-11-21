const regexp = new RegExp('(?<![가-힣])([가-힣]{2})(?![가-힣])', 'g');

const replaceEveryTwoLetter = (str: string) =>
  str.replace(regexp, (sub) => sub[1].repeat(2));

export { replaceEveryTwoLetter };
