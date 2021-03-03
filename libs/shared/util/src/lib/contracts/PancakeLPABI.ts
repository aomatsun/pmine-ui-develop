export const PancakeLPABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0Out',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1Out',
        type: 'uint256',
      },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve0',
        type: 'uint112',
      },
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve1',
        type: 'uint112',
      },
    ],
    name: 'Sync',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'burn',
    outputs: [
      { internalType: 'uint256', name: 'amount0', type: 'uint256' },
      { internalType: 'uint256', name: 'amount1', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
      { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
      { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_token0', type: 'address' },
      { internalType: 'address', name: '_token1', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'kLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'nonces',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'skim',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
      { internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'sync',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const pcByteCode = '0x608060405234801561001057600080fd5b50600436106101595760003560e01c80636a627842116100c95780636a627842146103bf57806370a08231146103e55780637464fc3d1461040b5780637ecebe001461041357806389afcb441461043957806395d89b4114610478578063a9059cbb14610480578063ba9a7a56146104ac578063bc25cf77146104b4578063c45a0155146104da578063d21220a7146104e2578063d505accf146104ea578063dd62ed3e1461053b578063fff6cae91461056957610159565b8063022c0d9f1461015e57806306fdde03146101ea5780630902f1ac14610267578063095ea7b31461029f5780630dfe1681146102df57806318160ddd1461030357806323b872dd1461031d57806330adf81f14610353578063313ce5671461035b5780633644e51514610379578063485cc955146103815780635909c0d5146103af5780635a3d5493146103b7575b600080fd5b6101e86004803603608081101561017457600080fd5b8135916020810135916001600160a01b036040830135169190810190608081016060820135600160201b8111156101aa57600080fd5b8201836020820111156101bc57600080fd5b803590602001918460018302840111600160201b831117156101dd57600080fd5b509092509050610571565b005b6101f2610abc565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61026f610ae3565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b6102cb600480360360408110156102b557600080fd5b506001600160a01b038135169060200135610b0d565b604080519115158252519081900360200190f35b6102e7610b24565b604080516001600160a01b039092168252519081900360200190f35b61030b610b33565b60408051918252519081900360200190f35b6102cb6004803603606081101561033357600080fd5b506001600160a01b03813581169160208101359091169060400135610b39565b61030b610bd3565b610363610bf7565b6040805160ff9092168252519081900360200190f35b61030b610bfc565b6101e86004803603604081101561039757600080fd5b506001600160a01b0381358116916020013516610c02565b61030b610c84565b61030b610c8a565b61030b600480360360208110156103d557600080fd5b50356001600160a01b0316610c90565b61030b600480360360208110156103fb57600080fd5b50356001600160a01b0316610f8e565b61030b610fa0565b61030b6004803603602081101561042957600080fd5b50356001600160a01b0316610fa6565b61045f6004803603602081101561044f57600080fd5b50356001600160a01b0316610fb8565b6040805192835260208301919091528051918290030190f35b6101f261135c565b6102cb6004803603604081101561049657600080fd5b506001600160a01b03813516906020013561137f565b61030b61138c565b6101e8600480360360208110156104ca57600080fd5b50356001600160a01b0316611392565b6102e76114fb565b6102e761150a565b6101e8600480360360e081101561050057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611519565b61030b6004803603604081101561055157600080fd5b506001600160a01b0381358116916020013516611716565b6101e8611733565b600c546001146105ba576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55841515806105cd5750600084115b6106085760405162461bcd60e51b815260040180806020018281038252602381526020018061215d6023913960400191505060405180910390fd5b600080610613610ae3565b5091509150816001600160701b0316871080156106385750806001600160701b031686105b610689576040805162461bcd60e51b815260206004820152601f60248201527f50616e63616b653a20494e53554646494349454e545f4c495155494449545900604482015290519081900360640190fd5b60065460075460009182916001600160a01b039182169190811690891682148015906106c75750806001600160a01b0316896001600160a01b031614155b61070e576040805162461bcd60e51b815260206004820152601360248201527250616e63616b653a20494e56414c49445f544f60681b604482015290519081900360640190fd5b8a1561071f5761071f828a8d611893565b891561073057610730818a8c611893565b86156107eb57886001600160a01b03166384800812338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b1580156107d257600080fd5b505af11580156107e6573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561083157600080fd5b505afa158015610845573d6000803e3d6000fd5b505050506040513d602081101561085b57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108a757600080fd5b505afa1580156108bb573d6000803e3d6000fd5b505050506040513d60208110156108d157600080fd5b5051925060009150506001600160701b0385168a900383116108f4576000610903565b89856001600160701b03160383035b9050600089856001600160701b031603831161092057600061092f565b89856001600160701b03160383035b905060008211806109405750600081115b61097b5760405162461bcd60e51b81526004018080602001828103825260228152602001806120f56022913960400191505060405180910390fd5b60006109af61099184600263ffffffff611a2416565b6109a3876103e863ffffffff611a2416565b9063ffffffff611a8716565b905060006109c761099184600263ffffffff611a2416565b90506109f8620f42406109ec6001600160701b038b8116908b1663ffffffff611a2416565b9063ffffffff611a2416565b610a08838363ffffffff611a2416565b1015610a48576040805162461bcd60e51b815260206004820152600a60248201526950616e63616b653a204b60b01b604482015290519081900360640190fd5b5050610a5684848888611ad7565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600b81526020016a50616e63616b65204c507360a81b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b1a338484611c8c565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bbe576001600160a01b0384166000908152600260209081526040808320338452909152902054610b99908363ffffffff611a8716565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610bc9848484611cee565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c56576040805162461bcd60e51b81526020600482015260126024820152712830b731b0b5b29d102327a92124a22222a760711b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610cdb576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c81905580610ceb610ae3565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d3f57600080fd5b505afa158015610d53573d6000803e3d6000fd5b505050506040513d6020811015610d6957600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dbc57600080fd5b505afa158015610dd0573d6000803e3d6000fd5b505050506040513d6020811015610de657600080fd5b505190506000610e05836001600160701b03871663ffffffff611a8716565b90506000610e22836001600160701b03871663ffffffff611a8716565b90506000610e308787611d96565b60005490915080610e6d57610e596103e86109a3610e54878763ffffffff611a2416565b611ef4565b9850610e6860006103e8611f46565b610ebc565b610eb96001600160701b038916610e8a868463ffffffff611a2416565b81610e9157fe5b046001600160701b038916610eac868563ffffffff611a2416565b81610eb357fe5b04611fca565b98505b60008911610efb5760405162461bcd60e51b81526004018080602001828103825260268152602001806121806026913960400191505060405180910390fd5b610f058a8a611f46565b610f1186868a8a611ad7565b8115610f4157600854610f3d906001600160701b0380821691600160701b90041663ffffffff611a2416565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c54600114611004576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c81905580611014610ae3565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561107057600080fd5b505afa158015611084573d6000803e3d6000fd5b505050506040513d602081101561109a57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b1580156110e857600080fd5b505afa1580156110fc573d6000803e3d6000fd5b505050506040513d602081101561111257600080fd5b5051306000908152600160205260408120549192506111318888611d96565b60005490915080611148848763ffffffff611a2416565b8161114f57fe5b049a5080611163848663ffffffff611a2416565b8161116a57fe5b04995060008b11801561117d575060008a115b6111b85760405162461bcd60e51b81526004018080602001828103825260268152602001806121176026913960400191505060405180910390fd5b6111c23084611fe2565b6111cd878d8d611893565b6111d8868d8c611893565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561121e57600080fd5b505afa158015611232573d6000803e3d6000fd5b505050506040513d602081101561124857600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561129457600080fd5b505afa1580156112a8573d6000803e3d6000fd5b505050506040513d60208110156112be57600080fd5b505193506112ce85858b8b611ad7565b81156112fe576008546112fa906001600160701b0380821691600160701b90041663ffffffff611a2416565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b60405180604001604052806007815260200166043616b652d4c560cc1b81525081565b6000610b1a338484611cee565b6103e881565b600c546001146113db576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b03948516949093169261148a9285928792611485926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561144d57600080fd5b505afa158015611461573d6000803e3d6000fd5b505050506040513d602081101561147757600080fd5b50519063ffffffff611a8716565b611893565b600854604080516370a0823160e01b815230600482015290516114f1928492879261148592600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561144d57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b42841015611561576040805162461bcd60e51b815260206004820152601060248201526f14185b98d85ad94e881156141254915160821b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa15801561167c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116b25750886001600160a01b0316816001600160a01b0316145b611700576040805162461bcd60e51b815260206004820152601a60248201527950616e63616b653a20494e56414c49445f5349474e415455524560301b604482015290519081900360640190fd5b61170b898989611c8c565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c5460011461177c576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b8152306004820152905161188c926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156117cd57600080fd5b505afa1580156117e1573d6000803e3d6000fd5b505050506040513d60208110156117f757600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561184457600080fd5b505afa158015611858573d6000803e3d6000fd5b505050506040513d602081101561186e57600080fd5b50516008546001600160701b0380821691600160701b900416611ad7565b6001600c55565b60408051808201825260198152787472616e7366657228616464726573732c75696e743235362960381b60209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061193c5780518252601f19909201916020918201910161191d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461199e576040519150601f19603f3d011682016040523d82523d6000602084013e6119a3565b606091505b50915091508180156119d15750805115806119d157508080602001905160208110156119ce57600080fd5b50515b611a1d576040805162461bcd60e51b815260206004820152601860248201527714185b98d85ad94e881514905394d1915497d1905253115160421b604482015290519081900360640190fd5b5050505050565b6000811580611a3f57505080820282828281611a3c57fe5b04145b610b1e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b1e576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611af557506001600160701b038311155b611b3a576040805162461bcd60e51b815260206004820152601160248201527050616e63616b653a204f564552464c4f5760781b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611b6a57506001600160701b03841615155b8015611b7e57506001600160701b03831615155b15611bef578063ffffffff16611bac85611b978661206e565b6001600160e01b03169063ffffffff61208016565b600980546001600160e01b03929092169290920201905563ffffffff8116611bd784611b978761206e565b600a80546001600160e01b0392909216929092020190555b600880546001600160701b0319166001600160701b0388811691909117600160701b600160e01b031916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d17908263ffffffff611a8716565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611d4c908263ffffffff6120a516565b6001600160a01b03808416600081815260016020908152604091829020949094558051858152905191939287169260008051602061213d83398151915292918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611de757600080fd5b505afa158015611dfb573d6000803e3d6000fd5b505050506040513d6020811015611e1157600080fd5b5051600b546001600160a01b038216158015945091925090611ee0578015611edb576000611e54610e546001600160701b0388811690881663ffffffff611a2416565b90506000611e6183611ef4565b905080821115611ed8576000611e8f611e80848463ffffffff611a8716565b6000549063ffffffff611a2416565b90506000611eb483611ea886600363ffffffff611a2416565b9063ffffffff6120a516565b90506000818381611ec157fe5b0490508015611ed457611ed48782611f46565b5050505b50505b611eec565b8015611eec576000600b555b505092915050565b60006003821115611f37575080600160028204015b81811015611f3157809150600281828581611f2057fe5b040181611f2957fe5b049050611f09565b50611f41565b8115611f41575060015b919050565b600054611f59908263ffffffff6120a516565b60009081556001600160a01b038316815260016020526040902054611f84908263ffffffff6120a516565b6001600160a01b038316600081815260016020908152604080832094909455835185815293519293919260008051602061213d8339815191529281900390910190a35050565b6000818310611fd95781611fdb565b825b9392505050565b6001600160a01b03821660009081526001602052604090205461200b908263ffffffff611a8716565b6001600160a01b03831660009081526001602052604081209190915554612038908263ffffffff611a8716565b60009081556040805183815290516001600160a01b0385169160008051602061213d833981519152919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161209d57fe5b049392505050565b80820182811015610b1e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe50616e63616b653a20494e53554646494349454e545f494e5055545f414d4f554e5450616e63616b653a20494e53554646494349454e545f4c49515549444954595f4255524e4544ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef50616e63616b653a20494e53554646494349454e545f4f55545055545f414d4f554e5450616e63616b653a20494e53554646494349454e545f4c49515549444954595f4d494e544544a265627a7a7231582082d63502615ee1d8d2654f9dbbe00633c648597f2419f5919c9a5bd46e1de28c64736f6c63430005100032'