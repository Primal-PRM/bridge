import {
  BSC_PRIMAL_BRIDGE,
  BSC_XDAI_BRIDGE,
  ETH_BSC_BRIDGE,
  ETH_XDAI_BRIDGE,
  KOVAN_SOKOL_BRIDGE,
  // nativeCurrencies,
  POA_XDAI_BRIDGE,
} from 'lib/constants';

export {
  BSC_PRIMAL_BRIDGE,
  BSC_XDAI_BRIDGE,
  ETH_BSC_BRIDGE,
  ETH_XDAI_BRIDGE,
  KOVAN_SOKOL_BRIDGE,
  POA_XDAI_BRIDGE,
};

const BSC_PRIMAL_BRIDGE_CONFIG = {
  label: 'primal⥊bsc',
  homeChainId: 56,
  foreignChainId: 39656,
  enableForeignCurrencyBridge: true,
  homeWrappedForeignCurrencyAddress:
    '0xac6833c567d2f91208cd1f8a3c75053dcd9fc7f4'.toLowerCase(),
  wrappedForeignCurrencyAddress:
    '0xa5551dBA69d8A3753B9c18219cAb4D1B0fd59977'.toLowerCase(),
  foreignMediatorAddress:
    '0xd60C5671eAA6F90fa1E13997B73cC53631d608e4'.toLowerCase(),
  homeMediatorAddress:
    '0x230dED59fDefc9D41dae05d02899004A923501Da'.toLowerCase(),
  foreignAmbAddress: '0x618dd58df482a8600dd31758873b335F06Dc3E08'.toLowerCase(),
  homeAmbAddress: '0x00722c41c43a237a880f315242C0721eB1C73D58'.toLowerCase(),
  foreignGraphName: 'primal/primal-to-bsc-omnibridge',
  homeGraphName: 'primal/bsc-to-primal-omnibridge',
  ambLiveMonitorPrefix: 'https://alm-bsc.prmscan.org',
  claimDisabled: false,
  tokensClaimDisabled: [
    '0x00722c41c43a237a880f315242C0721eB1C73D58'.toLowerCase(), // Wrapped PRM from BSC
  ],
};

const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);
console.log('ENABLED_BRIDGES', ENABLED_BRIDGES, process.env.REACT_APP_ENABLED_BRIDGES)
const bridgeInfo = {
  [BSC_PRIMAL_BRIDGE]: BSC_PRIMAL_BRIDGE_CONFIG,
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [BSC_PRIMAL_BRIDGE]: {
    // 56: {
    //   address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    //   chainId: 56,
    //   symbol: 'WBNB',
    //   name: 'Wrapped BNB',
    // },
    56: {
      address: '0xac6833c567d2f91208cd1f8a3c75053dcd9fc7f4',
      chainId: 56,
      symbol: 'WPRM',
      name: 'Wrapped PRM from PRM',
    },
    39656: {
      address: '0xa5551dBA69d8A3753B9c18219cAb4D1B0fd59977',
      chainId: 39656,
      symbol: 'WBNB',
      name: 'Wrapped BNB from PRM',
    },
  },
};
