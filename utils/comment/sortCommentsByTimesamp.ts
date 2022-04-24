import { TComment } from 'types'
import { insertionSort } from 'utils/insertionSort'
import { mergeSort } from 'utils/mergeSort'

const compareFn = (left: TComment, right: TComment) => {
    return left.timestamp < right.timestamp
}

/**
 * A helper method for sorting array of comments by timestamp.
 * It mutates original dataset.
 * It uses different algo for sorting based on dataset length(insertion sort is faster on small datasets).
 *
 * @param {TComment[]} commentArray
 * @return {TComment[]} TComment[]
 */
const sortCommentsByTimestamp = (commentArray: TComment[]): TComment[] => {
    const sortMethod = commentArray.length < 8 ? insertionSort : mergeSort

    return sortMethod(commentArray, compareFn)
}

export { sortCommentsByTimestamp }
