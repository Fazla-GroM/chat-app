const initializeMockService = () => {
    const isBrowser = typeof window !== 'undefined'

    if (isBrowser) {
        const { browserMockService } = require('./browserMockService')
        browserMockService.start()
    } else {
        const { serverMockService } = require('./serverMockService')
        serverMockService.listen()
    }
}

export { initializeMockService }
