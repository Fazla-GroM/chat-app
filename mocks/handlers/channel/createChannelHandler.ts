import { createHandlerUrl } from 'mocks/utils'
import { rest } from 'msw'
import { commentMockData } from './channelMockData'

const createChannelHandler = (apiBaseUrl?: string) => {
    return [
        rest.get(createHandlerUrl('/channel', apiBaseUrl), (req, res, ctx) => {
            console.log(req, res, ctx)

            return res(ctx.status(200), ctx.json(commentMockData))
        })
    ]
}

export { createChannelHandler }
