import { ReactNode, createContext, useEffect, useState } from 'react'
import { fetchAssets, fetchCrypto } from '../api'
import { percentDiff } from '../utils'
import { TCryptoAssets, TCryptoDataResult } from '../data'

const CryptoContext = createContext<{
	assets: TCryptoAssets[]
	crypto: TCryptoDataResult[]
	loading: boolean | undefined
}>({
	assets: [],
	crypto: [],
	loading: false,
})

export function CryptoContextProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false)
	const [crypto, setCrypto] = useState<TCryptoDataResult[]>([])
	const [assets, setAssets] = useState<TCryptoAssets[]>([])

	useEffect(() => {
		async function preload() {
			setLoading(true)
			const { result } = await fetchCrypto()
			const assets = await fetchAssets()

			setCrypto(result)
			setAssets(
				assets.map((asset) => {
					const coin = result.find((c) => c.id === asset.id)
					return {
						isGrow: coin?.price ? asset.price < coin.price : false,
						growPercent: coin?.price ? percentDiff(asset.price, coin.price) : 0,
						totalAmount: asset.amount * asset.price,
						totalProfit: coin?.price
							? asset.amount * (coin.price - asset.price)
							: 0,
						...asset,
					}
				})
			)
			setLoading(false)
		}
		preload()
	}, [])

	return (
		<CryptoContext.Provider value={{ loading, crypto, assets }}>
			{children}
		</CryptoContext.Provider>
	)
}

export default CryptoContext
