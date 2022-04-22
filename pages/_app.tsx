import type { AppProps } from 'next/app'

const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

if (isMockingEnabled) {
    const { initializeMockService } = require('../mocks')

    initializeMockService()
}

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App
