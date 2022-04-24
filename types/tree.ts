export type TTreeItem<TDataset extends Record<string, unknown>> = TDataset & {
    children: TTreeItem<TDataset>[]
}
