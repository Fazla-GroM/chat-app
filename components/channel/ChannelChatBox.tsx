import { Box, ButtonFilled, Card, Flex, ButtonIcon, InputText, Loading } from 'components/base'
import { PlusIcon, SendMessageIcon } from 'components/icons'
import { cloneElement } from 'react'
import { TCommentList } from 'types'

interface IChannelChatBoxProps {
    data: TCommentList
    isLoading: boolean
    children: React.ReactElement
}
const ChannelChatBox = ({ data, isLoading, children }: IChannelChatBoxProps) => {
    return (
        <Flex
            direction="column"
            css={{
                px: '$32',
                pt: '$24',
                overflow: 'auto',
                width: '100%',
                height: '100%',
                maxWidth: '103.2rem',
                maxHeight: '86.4rem',
                backgroundColor: '$chatBackground',
                borderRadius: '$8'
            }}
        >
            <Box css={{ flex: '1' }}>
                {isLoading ? (
                    <Flex align="center" justify="center" css={{ height: '100%' }}>
                        <Loading />
                    </Flex>
                ) : (
                    data?.map(item => cloneElement(children, { ...item, key: item?.groupTimestamp }))
                )}
                {/* {data?.map(item => cloneElement(children, { ...item, key: item?.groupTimestamp }))} */}
            </Box>
            <Box css={{ position: 'sticky', zIndex: 3, bottom: '$32', left: 0, width: '100%' }}>
                <Card hasBorder hasShadow bgColor="default" padding="8">
                    <Flex gap="16" css={{ flex: 1 }}>
                        <Flex gap="16" css={{ flex: 1 }}>
                            <ButtonIcon>
                                <PlusIcon />
                            </ButtonIcon>
                            <InputText type="text" css={{ flex: '1' }} />
                        </Flex>
                        <ButtonFilled>
                            <Box css={{ mr: '$12', width: '$24', height: '$24' }}>
                                <SendMessageIcon />
                            </Box>
                            Send message
                        </ButtonFilled>
                    </Flex>
                </Card>
            </Box>
        </Flex>
    )
}

export { ChannelChatBox }
