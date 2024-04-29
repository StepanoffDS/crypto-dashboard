import {
	Button,
	DatePicker,
	Divider,
	Form,
	FormProps,
	InputNumber,
	Result,
	Select,
	Space,
} from 'antd'
import { useRef, useState } from 'react'
import { useCrypto } from '../../context/crypto-context'
import { TCryptoAssets, TCryptoDataResult } from '../../data'
import CoinStats from '../CoinStats/CoinStats'

interface DateValue {
	$d: string
}

type FieldType = {
	id: string
	remember?: string
	amount?: number
	price?: number
	total?: string
	date?: DateValue
}

const validateMessages = {
	required: '${label} is required!',
	types: {
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
}

export default function AddAssetForm({ onClose }: { onClose: () => void }) {
	const [form] = Form.useForm()
	const { crypto, addAsset } = useCrypto()
	const [coin, setCoin] = useState<TCryptoDataResult | null>(null)
	const [submitted, setSubmitted] = useState(false)
	const assetRef = useRef<TCryptoAssets>()

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log(values)
		const newAsset = {
			id: coin?.id || '',
			amount: values.amount,
			price: values.price,
			date: values.date?.$d ?? new Date(),
		}
		assetRef.current = newAsset
		setSubmitted(true)
		addAsset(newAsset)
	}

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
		errorInfo
	) => {
		console.log('Failed:', errorInfo)
	}

	if (submitted) {
		return (
			<Result
				status='success'
				title='New Asset Added!'
				subTitle={`Added ${assetRef.current?.amount} of ${coin?.name} by price ${assetRef.current?.price}`}
				extra={[
					<Button type='primary' key='console' onClick={onClose}>
						Close
					</Button>,
				]}
			/>
		)
	}

	if (!coin) {
		return (
			<Select
				style={{ width: '100%' }}
				onSelect={(v) => setCoin(crypto.find((coin) => coin.id === v) ?? null)}
				placeholder='Select Coin'
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
		)
	}

	function handleAmountChange(value: number | null) {
		const price = form.getFieldValue('price')
		form.setFieldsValue({
			total: +((value ?? 0) * price).toFixed(4),
		})
	}

	function handlePriceChange(value: number | null) {
		const amount = form.getFieldValue('amount')
		form.setFieldsValue({
			total: +(amount * (value ?? 0)).toFixed(4),
		})
	}

	return (
		<Form
			form={form}
			name='basic'
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 10 }}
			style={{ maxWidth: 600 }}
			initialValues={{ price: +coin.price.toFixed(4) }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			validateMessages={validateMessages}
		>
			<CoinStats coin={coin} />
			<Divider />
			<Form.Item<FieldType>
				label='Amount'
				name='amount'
				rules={[
					{
						required: true,
						type: 'number',
						min: 0,
					},
				]}
			>
				<InputNumber
					placeholder='Enter coin amount'
					onChange={handleAmountChange}
					style={{ width: '100%' }}
				/>
			</Form.Item>

			<Form.Item<FieldType> label='Price' name='price'>
				<InputNumber onChange={handlePriceChange} style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item<FieldType> label='Date & Time' name='date'>
				<DatePicker showTime style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item<FieldType> label='Total' name='total'>
				<InputNumber disabled style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Add Asset
				</Button>
			</Form.Item>
		</Form>
	)
}
