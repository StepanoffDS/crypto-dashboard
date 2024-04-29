import { Header } from 'antd/es/layout/layout'
import { Select, Space, Button, Modal, Drawer } from 'antd'
import styles from './AppHeader.module.scss'
import { useCrypto } from '../../../context/crypto-context'
import { useEffect, useState } from 'react'
import CoinInfoModal from '../../CoinInfoModal/CoinInfoModal'
import { TCryptoDataResult } from '../../../data'
import AddAssetForm from '../../AddAssetForm/AddAssetForm'

export default function AppHeader() {
	const { crypto } = useCrypto()
	const [coin, setCoin] = useState<TCryptoDataResult | null>(null)
	const [select, setSelect] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	useEffect(() => {
		const keypress = (event: KeyboardEvent) => {
			if (event.key === '/') {
				setSelect((prev) => !prev)
			}
		}

		document.addEventListener('keypress', keypress)

		return () => document.removeEventListener('keypress', keypress)
	}, [])

	function handleSelect(value: string) {
		setCoin(crypto.find((coin) => coin.id === value) ?? null)
		setIsModalOpen(true)
	}

	return (
		<Header className={styles.headerStyle}>
			<Select
				style={{ width: 250 }}
				open={select}
				onSelect={handleSelect}
				onClick={() => setSelect((prev) => !prev)}
				placeholder='press / to open'
				// onChange={handleChange}
				options={crypto.map((coin) => ({
					label: coin.name,
					value: coin.id,
					emoji: coin.icon,
				}))}
				optionRender={(option) => (
					<Space>
						<img
							style={{ width: 20, height: 20 }}
							src={option.data.emoji}
							alt={option.data.label}
						/>
						{option.data.label}
					</Space>
				)}
			/>
			<Modal
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
			>
				{coin && <CoinInfoModal coin={coin} />}
			</Modal>

			<Button type='primary' onClick={() => setIsDrawerOpen(true)}>
				Add Asset
			</Button>
			<Drawer
				title='Add Asset'
				width={600}
				onClose={() => setIsDrawerOpen(false)}
				open={isDrawerOpen}
				destroyOnClose
			>
				<AddAssetForm onClose={() => setIsDrawerOpen(false)} />
			</Drawer>
		</Header>
	)
}
