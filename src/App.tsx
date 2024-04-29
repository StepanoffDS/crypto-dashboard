import { FC } from 'react'
import { CryptoContextProvider } from './context/crypto-context'
import AppLayout from './components/layout/AppLayout'

const App: FC = () => {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	)
}

export default App
