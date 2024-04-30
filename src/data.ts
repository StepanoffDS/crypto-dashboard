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
	contractAddress?: string
}

export type TCryptoAssets = {
	id: string
	name?: string
	amount: number | undefined
	price: number | undefined
	date?: string | Date
	isGrow?: boolean | undefined
	growPercent?: number
	totalAmount?: number
	totalProfit?: number
}

export const cryptoAssets = [
	{
		id: 'bitcoin',
		amount: 0.22,
		price: 26244,
		date: new Date(),
	},
	{
		id: 'ethereum',
		amount: 20,
		price: 3420,
		date: new Date(),
	},
]
