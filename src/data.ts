export type TCryptoData = {
	result: TCryptoDataResult[]
}

export type TCryptoDataResult = {
	id: string
	icon: string
	name: string
	symbol: string
	rank: number
	price: number
	priceBtc: number
	volume: number
	marketCap: number
	availableSupply: number
	totalSupply: number
	priceChange1h: number
	priceChange1d: number
	priceChange1w: number
	redditUrl: string
	websiteUrl: string
	twitterUrl: string
	explorers: string[]
}

export const cryptoData = {
	result: [
		{
			id: 'bitcoin',
			icon: 'https://static.coinstats.app/coins/1650455588819.png',
			name: 'Bitcoin',
			symbol: 'BTC',
			rank: 1,
			price: 66403.48047085966,
			priceBtc: 1,
			volume: 43364961313.76143,
			marketCap: 1307453984870.2102,
			availableSupply: 19689540,
			totalSupply: 21000000,
			priceChange1h: -0.25,
			priceChange1d: 0.74,
			priceChange1w: 6.09,
			redditUrl: 'https://www.reddit.com/r/Bitcoin/',
			websiteUrl: 'https://bitcoin.org',
			twitterUrl: 'https://twitter.com/bitcoin',
			explorers: [
				'https://mempool.space/',
				'https://blockchair.com/bitcoin/',
				'https://btc.com/',
				'https://btc.tokenview.io/',
				'https://www.oklink.com/btc',
				'https://3xpl.com/bitcoin',
				'https://blockchain.coinmarketcap.com/chain/bitcoin',
				'https://blockexplorer.one/btc/mainnet',
			],
		},
		{
			id: 'ethereum',
			icon: 'https://static.coinstats.app/coins/1650455629727.png',
			name: 'Ethereum',
			symbol: 'ETH',
			rank: 2,
			price: 3272.7565177569013,
			priceBtc: 0.049287224680525814,
			volume: 17912639831.25586,
			marketCap: 399430638363.71936,
			availableSupply: 122047160,
			totalSupply: 122047160,
			priceChange1h: -0.24,
			priceChange1d: 2.92,
			priceChange1w: 7.58,
			redditUrl: 'https://www.reddit.com/r/ethereum',
			websiteUrl: 'https://www.ethereum.org/',
			twitterUrl: 'https://twitter.com/ethereum',
			contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
			decimals: 18,
			explorers: [
				'https://etherscan.io/',
				'https://ethplorer.io/',
				'https://blockchair.com/ethereum',
				'https://eth.tokenview.io/',
				'https://www.oklink.com/eth',
				'https://3xpl.com/ethereum',
				'https://blockchain.coinmarketcap.com/chain/ethereum',
			],
		},
		{
			id: 'dogecoin',
			icon: 'https://static.coinstats.app/coins/DogecoinIZai5.png',
			name: 'Dogecoin',
			symbol: 'DOGE',
			rank: 9,
			price: 0.15054403760735965,
			priceBtc: 0.0000023499435731397953,
			volume: 1208519251.5807583,
			marketCap: 21682872246.62453,
			availableSupply: 144030096384,
			totalSupply: 144030096384,
			priceChange1h: 0.57,
			priceChange1d: -7.07,
			priceChange1w: 1.04,
			redditUrl: 'https://www.reddit.com/r/dogecoin/',
			websiteUrl: 'http://dogecoin.com/',
			twitterUrl: 'https://twitter.com/dogecoin',
			contractAddress: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
			decimals: 18,
			explorers: [
				'https://blockchair.com/dogecoin',
				'https://doge.tokenview.io/',
				'https://3xpl.com/dogecoin',
			],
		},
	],
}

export type TCryptoAssets = {
	id: string
	amount: number
	price: number
	date: Date
	isGrow?: boolean | undefined
	growPercent?: number
	totalAmount?: number
	totalProfit?: number
}

export const cryptoAssets = [
	{
		id: 'bitcoin',
		amount: 0.02,
		price: 26244,
		date: new Date(),
	},
	{
		id: 'ethereum',
		amount: 5,
		price: 12000,
		date: new Date(),
	},
	{
		id: 'dogecoin',
		price: 0.072,
		amount: 10000,
		date: new Date(),
	},
]
