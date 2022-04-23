/**
 * Insertion sort algorithm impementation with comparator function.
 * It mutates original dataset.
 *
 * @template TData
 * @param {TData[]} arrayToSort
 * @param {(left: TData, right: TData) => boolean} compareFn
 * @return {TData[]} TData[]
 */
const insertionSort = <TData>(arrayToSort: TData[], compareFn: (left: TData, right: TData) => boolean): TData[] => {
    if (arrayToSort.length < 2) {
        return arrayToSort
    }

    for (let i = 1; i < arrayToSort.length; i += 1) {
        // first element in our unsorted subarray
        let current = arrayToSort[i]
        //  last element of our sorted subarray
        let j = i - 1
        while (j > -1 && compareFn(current, arrayToSort[j])) {
            arrayToSort[j + 1] = arrayToSort[j]
            j -= 1
        }
        arrayToSort[j + 1] = current
    }
    return arrayToSort
}

export { insertionSort }
