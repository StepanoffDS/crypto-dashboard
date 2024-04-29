import { Layout, Spin } from 'antd'
import styles from './../../App.module.scss'
import AppHeader from './AppHeader/AppHeader'
import AppSider from './AppSider/AppSider'
import AppFooter from './AppContent/AppContent'
import AppContent from './AppContent/AppContent'
import { useContext } from 'react'
import CryptoContext from '../../context/crypto-context'

export default function AppLayout() {
	const { loading } = useContext(CryptoContext)

	if (loading) {
		return <Spin fullscreen />
	}
	return (
		<Layout className={styles.layoutStyle}>
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
			<AppFooter />
		</Layout>
	)
}
