import Sider from 'antd/es/layout/Sider'
import styles from './AppSider.module.scss'
import { Card, List, Statistic, Typography, Tag } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { FC, useContext } from 'react'
import { capitalize } from '../../../utils'
import CryptoContext from '../../../context/crypto-context'

const AppSider: FC = () => {
	const { assets } = useContext(CryptoContext)

	return (
		<Sider className={styles.siderStyle} width='25%'>
			{assets.map((asset) => (
				<Card key={asset.id}>
					<Statistic
						title={capitalize(asset.id)}
						value={asset.totalAmount}
						precision={2}
						valueStyle={{ color: asset.isGrow ? '#3f8600' : '#cf1322' }}
						prefix={asset.isGrow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
						suffix='$'
					/>
					<List
						size='small'
						dataSource={[
							{ title: 'Total Profit', value: asset.totalProfit, hasTag: true },
							{ title: 'Asset Amount', value: asset.amount, isPlain: true },
							// { title: 'Difference', value: asset.growPercent },
						]}
						renderItem={(item) => (
							<List.Item>
								<span>{item.title}</span>
								{item.hasTag && (
									<Tag color={asset.isGrow ? 'green' : 'red'}>
										{asset.growPercent}%
									</Tag>
								)}
								{item.isPlain && <span>{item.value}</span>}
								{!item.isPlain && (
									<Typography.Text type={asset.isGrow ? 'success' : 'danger'}>
										${item.value ? item.value.toFixed(2) : ''}
									</Typography.Text>
								)}
							</List.Item>
						)}
					/>
				</Card>
			))}
		</Sider>
	)
}

export default AppSider
