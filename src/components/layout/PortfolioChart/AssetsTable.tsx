import React from 'react'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { useCrypto } from '../../../context/crypto-context'

interface DataType {
	key: string | undefined
	name: string
	price: number
	amount: number
}

const columns: TableColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		showSorterTooltip: { target: 'full-header' },
		// specify the condition of filtering result
		// here is that finding the name started with `value`
		onFilter: (value, record) => record.name.indexOf(value as string) === 0,
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Price, $',
		dataIndex: 'price',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.price - b.price,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.amount - b.amount,
	},
]

export default function AssetsTable() {
	const { assets } = useCrypto()

	const data: DataType[] = assets.map((asset) => ({
		key: asset.id,
		name: asset.name ?? 'Default Name',
		price: asset.price ?? 0,
		amount: asset.amount ?? 0,
	}))

	return (
		<div>
			{' '}
			<Table
				pagination={false}
				columns={columns}
				dataSource={data}
				showSorterTooltip={{ target: 'sorter-icon' }}
			/>
		</div>
	)
}
