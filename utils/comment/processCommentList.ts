import { TComment, TCommentList } from 'types'
import { createTreeFromUnsortedDataset } from 'utils/createTreeFromUnsortedDataset'
import { createCommentList } from './createCommentList'
import { sortCommentsByTimestamp } from './sortCommentsByTimesamp'

/**
 * A helper method for creating comment list ready to display on UI.
 * It takes comment array from response.
 * It clones provided list via native JSON.parse and stringify methods.
 * It sorts items by timestamp.
 * It creates a tree by id and parent_id.
 * It creates and returns a comment list.
 *
 * @param {TComment[]} commentsArray
 * @return {TCommentList} TCommentList
 */
const processCommentList = (commentsArray: TComment[]): TCommentList => {
    //first we clone dataset to preserve imutability
    const clonedCommentList: TComment[] = JSON.parse(JSON.stringify(commentsArray))

    //We then sort items by timestamp
    const commentsSortedByTimestamp = sortCommentsByTimestamp(clonedCommentList)

    //we then create a tree structure grouped by parent_id
    const commentsGroupedByParentId = createTreeFromUnsortedDataset(commentsSortedByTimestamp, 'id', 'parent_id')

    //we then group comments by day
    const { commentList } = createCommentList(commentsGroupedByParentId)

    return commentList
}

export { processCommentList }
