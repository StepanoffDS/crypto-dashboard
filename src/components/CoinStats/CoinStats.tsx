import { Flex, Typography } from 'antd'
import { TCryptoDataResult } from '../../data'

export default function CoinStats({ coin }: { coin: TCryptoDataResult }) {
	return (
		<Flex gap='middle' align='center'>
			<img src={coin.icon} alt={coin.name} style={{ width: 40, height: 40 }} />
			<Typography.Title level={2} style={{ marginBottom: 0 }}>
				{coin.name} ({coin.symbol})
			</Typography.Title>
		</Flex>
	)
}
