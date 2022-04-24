import dayjs from 'dayjs'
import { TCommentList, TCommentTreeItem } from 'types'

type TCreateCommentListResponse = {
    commentList: TCommentList
    danglingNodes: TCommentTreeItem[]
}

/**
 * A helper method for creating comment list.
 * It expects that comments are already sorted by timestamp.
 * It returns a commentList and potential dangling nodes for easier debugging in development.
 *
 * @param {TCommentTreeItem[]} commentsArray
 * @return {TCreateCommentListResponse} TCreateCommentListResponse
 */
const createCommentList = (commentsArray: TCommentTreeItem[]): TCreateCommentListResponse => {
    const danglingNodes: TCommentTreeItem[] = []
    const hashMap = new Map(
        commentsArray.map(item => {
            const timestampAsDayString = dayjs(item.timestamp).format('DD/MM/YYYY')
            return [timestampAsDayString, { groupTimestamp: item.timestamp, comments: [] as TCommentTreeItem[] }]
        })
    )

    for (let i = 0; i < commentsArray.length; i += 1) {
        const item = commentsArray[i]
        const itemTimestampAsDayString = dayjs(item.timestamp).format('DD/MM/YYYY')

        const node = hashMap.get(itemTimestampAsDayString)

        if (node) {
            node.comments.push(item)

            hashMap.set(itemTimestampAsDayString, node)
        } else {
            if (process.env.NODE_ENV === 'development') {
                console.warn(`[createCommentList]: u have dangling nodes. Node: ${JSON.stringify(item)}`)
                danglingNodes.push(item)
            }
        }
    }

    const commentList: TCommentList = Array.from(hashMap, ([_key, value]) => value)

    return { commentList, danglingNodes }
}

export { createCommentList }
