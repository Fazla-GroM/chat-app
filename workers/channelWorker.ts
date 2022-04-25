import { TComment } from 'types'
import { processCommentList } from 'utils'

//@NOTE: this is dedicated channel worker.
// It currently only recieves comment data and proccesses it.
// It is used inside useChannelWorker hook.
// take  note that useChannelWorker uses relative path to this file if you consider moving file elswhere.

addEventListener('message', event => {
    postMessage(processCommentList(event.data as TComment[]))
})
