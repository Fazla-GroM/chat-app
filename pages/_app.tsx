import type { AppProps as TAppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

if (isMockingEnabled) {
    const { initializeMockService } = require('../mocks')

    initializeMockService()
}

const App = ({ Component, pageProps }: TAppProps) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App
