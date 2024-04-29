import { Divider, Tag, Typography } from 'antd'
import { TCryptoDataResult } from '../../data'
import CoinStats from '../CoinStats/CoinStats'

export default function CoinInfoModal({ coin }: { coin: TCryptoDataResult }) {
	return (
		<>
			<CoinStats coin={coin} />
			<Divider />
			<Typography.Paragraph>
				<Typography.Text strong style={{ marginRight: 10 }}>
					1 hour:
				</Typography.Text>
				<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
					{coin.priceChange1h}%
				</Tag>
				<Typography.Text strong style={{ marginRight: 10 }}>
					1 day:
				</Typography.Text>
				<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
					{coin.priceChange1d}%
				</Tag>
				<Typography.Text strong style={{ marginRight: 10 }}>
					1 week:
				</Typography.Text>
				<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
					{coin.priceChange1w}%
				</Tag>
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Price: $</Typography.Text>
				{coin.price.toFixed(4)}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Price BTC: </Typography.Text>
				{coin.priceBtc.toFixed(8)}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Market Cap: $</Typography.Text>
				{coin.marketCap.toFixed(2)}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Contract Address: </Typography.Text>
				{coin.contractAddress ? coin.contractAddress : 'N/A'}
			</Typography.Paragraph>
		</>
	)
}
