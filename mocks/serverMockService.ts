import { setupServer } from 'msw/node'
import { serverHandlers } from './handlers'

const serverMockService = setupServer(...serverHandlers)

export { serverMockService }
