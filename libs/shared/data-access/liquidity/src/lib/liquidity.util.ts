import Date from 'datejs';

const oneWeekAgo = () =>
  (new Date().clearTime().addDays(-7).getTime()) / 1000;

export const makePairQuery = pairs => `
  {
    pairs (where: {
      id_in: ${JSON.stringify(pairs)}
    }) {
      id
      token0Price
      reserve0
      reserve1
      reserveUSD
      totalSupply
      token1Price
      volumeUSD
      token0 {
        symbol
      }
    },
    pairDayDatas(where: {
      pairAddress_in: ${JSON.stringify(pairs)},
      date_gte: ${oneWeekAgo()}
    },
      orderBy: date,
      orderDirection: desc
    ) {
      date
      pairAddress,
      dailyVolumeUSD
    }
  }
`
