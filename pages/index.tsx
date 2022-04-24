import { ChannelChatBox, ChannelMessageCard, ChannelMessageGroup, Flex, Box } from 'components'
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

    return (
        <Box
            css={{
                '@bp1': {
                    py: '$80'
                },
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <ChannelChatBox data={processedCommentsData} isLoading={commentListQuery.isLoading}>
                <ChannelMessageGroup>
                    <ChannelMessageCard />
                </ChannelMessageGroup>
            </ChannelChatBox>
        </Box>
    )
}

export default HomePage
