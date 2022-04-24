import { BaseLayout } from 'components'
import type { AppProps as TAppProps } from 'next/app'
import { DataServiceProvider } from 'providers'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { dataService } from 'services'
import { injectGlobalStyles } from 'theme'

const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

if (isMockingEnabled) {
    const { initializeMockService } = require('../mocks')

    initializeMockService()
}

const App = ({ Component, pageProps }: TAppProps) => {
    injectGlobalStyles()
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <DataServiceProvider dataService={dataService}>
                    <BaseLayout>
                        <Component {...pageProps} />
                    </BaseLayout>
                </DataServiceProvider>
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App
