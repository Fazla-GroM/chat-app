import { setupWorker } from 'msw'
import { browserHandlers } from './handlers'

const browserMockService = setupWorker(...browserHandlers)

export { browserMockService }
