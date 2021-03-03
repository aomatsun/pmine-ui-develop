export interface LiquidityState {
  prices: CoinGeckoSimplePricesResult,
  pairs: any[],
  pairDayDatas: any[],
  stakedLiquidityPools: any[];
}

export interface CoinGeckoResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data: T;
}

export interface CoinGeckoSimplePricesResult {
  [id: string]: {
    [currency: string]: number,
  }
}
