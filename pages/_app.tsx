import type { AppProps as TAppProps } from 'next/app'
import { DataServiceProvider } from 'providers'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { dataService } from 'services'

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
                <DataServiceProvider dataService={dataService}>
                    <Component {...pageProps} />
                </DataServiceProvider>
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App
