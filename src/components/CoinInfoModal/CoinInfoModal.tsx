import { Divider, Flex, Tag, Typography } from 'antd'

export default function CoinInfoModal({ coin }) {
	return (
		<>
			<Flex gap='middle' align='center'>
				<img
					src={coin.icon}
					alt={coin.name}
					style={{ width: 40, height: 40 }}
				/>
				<Typography.Title level={2} style={{ marginBottom: 0 }}>
					{coin.name} ({coin.symbol})
				</Typography.Title>
			</Flex>
			<Divider></Divider>
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
