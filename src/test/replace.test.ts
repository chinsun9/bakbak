import { replace } from '../replace';

describe('only targetString', () => {
  describe('case 대박', () => {
    it('should be 박박', () => {
      expect(replace('대박')).toEqual('박박');
    });
    it('should be 박박사건', () => {
      expect(replace('대박사건')).toEqual('박박사건');
    });
    it('should be 박쓰', () => {
      expect(replace('대박쓰')).toEqual('박쓰');
    });
  });

  describe('case 진짜', () => {
    it('should be 짜짜', () => {
      expect(replace('진짜')).toEqual('짜짜');
    });
    it('should be 짜루', () => {
      expect(replace('진짜루')).toEqual('짜루');
    });
    it('should be 짜냐구', () => {
      expect(replace('진짜냐구')).toEqual('짜냐구');
    });
  });

  describe('case 존나', () => {
    it('should be 나나', () => {
      expect(replace('존나')).toEqual('나나');
    });
  });

  describe('case 안녕', () => {
    it('should be 안녕', () => {
      expect(replace('안녕')).toEqual('안녕');
    });
  });
});
