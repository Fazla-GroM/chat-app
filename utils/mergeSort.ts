/**
 *
 *
 * @template TData
 * @param {TData[]} leftArray
 * @param {TData[]} rightArray
 * @param {(left: TData, right: TData) => boolean} compareFn
 * @return {TData[]}
 */
const merge = <TData>(
    leftArray: TData[],
    rightArray: TData[],
    compareFn: (left: TData, right: TData) => boolean
): TData[] => {
    const stack: TData[] = []

    while (leftArray.length && rightArray.length) {
        if (compareFn(leftArray[0], rightArray[0])) {
            const firstItem = leftArray.shift()

            if (firstItem) {
                stack.push(firstItem)
            }
        } else {
            const firstItem = rightArray.shift()

            if (firstItem) {
                stack.push(firstItem)
            }
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...stack, ...leftArray, ...rightArray]
}

/**
 * Merge sort algorithm implementation with comparator function.
 * It modifies original dataset.
 *
 * @template TData
 * @param {TData[]} arrayToSort
 * @param {(left: TData, right: TData) => boolean} compareFn
 * @return {TData[]} TData[]
 */
const mergeSort = <TData>(arrayToSort: TData[], compareFn: (left: TData, right: TData) => boolean): TData[] => {
    if (arrayToSort.length < 2) {
        return arrayToSort
    }

    const mid = Math.floor(arrayToSort.length / 2)
    const leftPart = arrayToSort.splice(0, mid)

    return merge<TData>(mergeSort(leftPart, compareFn), mergeSort(arrayToSort, compareFn), compareFn)
}

export { mergeSort }
