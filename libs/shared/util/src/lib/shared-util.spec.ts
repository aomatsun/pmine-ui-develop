import { BNtoNumber } from './shared-util';

describe('BNtoNumber', () => {
  it('should convert a number to a number with decimals', () => {
    expect(BNtoNumber(3, 1e18)).toEqual('0.000000000000000003');
  });
});
