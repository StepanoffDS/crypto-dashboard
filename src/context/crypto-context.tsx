import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { fetchAssets, fetchCrypto } from '../api'
import { percentDiff } from '../utils'
import { TCryptoAssets, TCryptoDataResult } from '../data'

const CryptoContext = createContext<{
	assets: TCryptoAssets[]
	crypto: TCryptoDataResult[]
	loading: boolean | undefined
	addAsset: (newAsset: TCryptoAssets) => void
}>({
	assets: [],
	crypto: [],
	loading: false,
	addAsset: () => {},
})

export function CryptoContextProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false)
	const [crypto, setCrypto] = useState<TCryptoDataResult[]>([])
	const [assets, setAssets] = useState<TCryptoAssets[]>([])

	function mapAssets(assets: TCryptoAssets[], result: TCryptoDataResult[]) {
		return assets.map((asset) => {
			const coin = result.find((c) => c.id === asset.id)
			return {
				isGrow: coin?.price && asset.price ? asset.price < coin.price : false,
				growPercent:
					coin?.price && asset.price ? percentDiff(asset.price, coin.price) : 0,
				totalAmount:
					asset.amount && asset.price ? asset.amount * asset.price : 0,
				totalProfit:
					coin?.price && asset.amount && asset.price
						? asset.amount * (coin.price - asset.price)
						: 0,
				...asset,
			}
		})
	}

	useEffect(() => {
		async function preload() {
			setLoading(true)
			const { result } = await fetchCrypto()
			const assets = await fetchAssets()

			setCrypto(result)
			setAssets(mapAssets(assets, result))
			setLoading(false)
		}
		preload()
	}, [])

	function addAsset(newAsset: TCryptoAssets) {
		setAssets((prev) => mapAssets([...prev, newAsset], crypto))
	}

	return (
		<CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
			{children}
		</CryptoContext.Provider>
	)
}

export default CryptoContext

export function useCrypto() {
	return useContext(CryptoContext)
}
