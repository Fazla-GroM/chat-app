import { useGetList } from 'hooks'
import { useMemo } from 'react'
import { TCommentResponse } from 'types'
import { processCommentList } from 'utils'

const HomePage = () => {
    const commentListQuery = useGetList<TCommentResponse>({ resource: 'channel' })

    const processedCommentsData = useMemo(() => {
        if (!commentListQuery.data?.comments) {
            return []
        }
        return processCommentList(commentListQuery.data?.comments)
    }, [commentListQuery.data])

    console.log('rerender', processedCommentsData)

    return <h1>home page</h1>
}

export default HomePage
