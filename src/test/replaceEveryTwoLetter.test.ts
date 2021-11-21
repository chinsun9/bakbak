import { replaceEveryTwoLetter } from '../replaceEveryTwoLetter';

describe('replaceEveryTwoLetter', () => {
  it('should 녕녕 세세 요', () => {
    expect(replaceEveryTwoLetter('안녕 하세 요')).toEqual('녕녕 세세 요');
  });

  it('should 단단 만들어! 그리고 숴숴!', () => {
    expect(replaceEveryTwoLetter('일단 만들어! 그리고 부숴!')).toEqual(
      '단단 만들어! 그리고 숴숴!',
    );
  });
});
