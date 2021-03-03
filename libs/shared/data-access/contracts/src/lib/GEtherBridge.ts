export default [
  {
    inputs: [
      { internalType: 'address', name: '_stakeToken', type: 'address' },
      { internalType: 'uint256', name: '_minShares', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_stakeToken', type: 'address' },
      { internalType: 'uint256', name: '_shares', type: 'uint256' },
      { internalType: 'uint256', name: '_minAmount', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
