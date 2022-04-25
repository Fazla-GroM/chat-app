import { ChannelChatBox, ChannelMessageCard, ChannelMessageGroup, Box } from 'components'
import { useChannelWorker, useGetList } from 'hooks'
import { TCommentResponse } from 'types'

const HomePage = () => {
    const { proccessData, channelData, isProccessing } = useChannelWorker()

    const commentListQuery = useGetList<TCommentResponse>(
        { resource: 'channel' },
        {
            onSuccess(data) {
                proccessData(data.data.comments)
            }
        }
    )

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
            <ChannelChatBox
                data={channelData}
                isLoading={(!channelData.length && isProccessing) || commentListQuery.isLoading}
            >
                <ChannelMessageGroup>
                    <ChannelMessageCard />
                </ChannelMessageGroup>
            </ChannelChatBox>
        </Box>
    )
}

export default HomePage
