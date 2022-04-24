import { TTreeItem } from 'types'

/**
 * A helper method which creates tree structure when provided array with objects and compare keys.
 * It doesnt expect dataset to be sorted.
 *
 * @template TDataset
 * @param {TDataset[]} dataset
 * @param {keyof TDataset} key
 * @param {keyof TDataset} keyToCompare
 * @return {TTreeItem<TDataset>[]} TTreeItem<TDataset>[]
 */
const createTreeFromUnsortedDataset = <TDataset extends Record<string, unknown>>(
    dataset: TDataset[],
    key: keyof TDataset,
    keyToCompare: keyof TDataset
): TTreeItem<TDataset>[] => {
    if (!dataset.length) {
        return []
    }

    const hashMap = new Map(dataset.map(item => [item[key], { ...item, children: [] as TTreeItem<TDataset>[] }]))
    const dataTree: TTreeItem<TDataset>[] = []

    hashMap.forEach(hashmapValue => {
        if (hashmapValue[keyToCompare]) {
            const parentItem = hashMap.get(hashmapValue[keyToCompare])

            if (parentItem) {
                parentItem?.children.push(hashmapValue)

                hashMap.set(hashmapValue[keyToCompare], parentItem)
            }
        } else {
            dataTree.push(hashmapValue)
        }
    })

    return dataTree
}

export { createTreeFromUnsortedDataset }
