import { Content } from 'antd/es/layout/layout'
import styles from './AppContent.module.scss'
import { Typography } from 'antd'
import { useCrypto } from '../../../context/crypto-context'
import PortfolioChart from '../PortfolioChart/PortfolioChart'
import AssetsTable from '../PortfolioChart/AssetsTable'

export default function AppContent() {
	const { assets, crypto } = useCrypto()

	const cryptoPriceMap: Record<string, number> = crypto.reduce((acc, c) => {
		return {
			...acc,
			[c.id]: c.price,
		}
	}, {})

	return (
		<Content className={styles.contentStyle}>
			<Typography.Title style={{ textAlign: 'left', color: '#fff' }} level={3}>
				Portfolio: $
				{assets
					.map((asset) => {
						return asset.amount ? asset.amount * cryptoPriceMap[asset.id] : 0
					})
					.reduce((acc, v) => (acc += v), 0)
					.toFixed(2)}
			</Typography.Title>
			<PortfolioChart />
			<AssetsTable />
		</Content>
	)
}
