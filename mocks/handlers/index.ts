import { createChannelHandler } from './channel'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const channelHandler = createChannelHandler(apiBaseUrl)

const browserHandlers = [...channelHandler]

const serverHandlers = [...channelHandler]

export { browserHandlers, serverHandlers }
