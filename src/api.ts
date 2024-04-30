import { TCryptoAssets, TCryptoData, cryptoAssets } from './data'

export function fetchCrypto(): Promise<TCryptoData> {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'X-API-KEY': 'dravNGhRF6fPcMOH6aVNWa8xuFDrJGBdO5tvIjEjNM8=',
		},
	}

	return fetch('https://openapiv1.coinstats.app/coins', options)
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error:', error)
			throw error
		})
}

export function fetchAssets(): Promise<TCryptoAssets[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoAssets)
		}, 0)
	})
}
