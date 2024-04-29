import { TCryptoAssets, TCryptoData, cryptoAssets, cryptoData } from './data'

export function fetchCrypto(): Promise<TCryptoData> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoData)
		}, 0)
	})
}

export function fetchAssets(): Promise<TCryptoAssets[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoAssets)
		}, 0)
	})
}

// const options = {
// 	method: 'GET',
// 	headers: {
// 		accept: 'application/json',
// 		'X-API-KEY': 'dravNGhRF6fPcMOH6aVNWa8xuFDrJGBdO5tvIjEjNM8=',
// 	},
// }

// fetch('https://openapiv1.coinstats.app/coins', options)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.error(err))
