import { TTreeItem } from './tree'

export type TComment = {
    id: number
    parent_id?: number
    text: string
    timestamp: number
    author: {
        name: string
        picture: string
    }
}

export type TCommentResponse = {
    data: {
        comments: TComment[]
    }
}

export type TCommentTreeItem = TTreeItem<TComment>

export type TCommentListItem = {
    groupTimestamp: number
    comments: TCommentTreeItem[]
}

export type TCommentList = TCommentListItem[]
