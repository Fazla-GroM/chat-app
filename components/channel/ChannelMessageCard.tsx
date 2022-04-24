import { Box, Card, Flex, Text } from 'components/base'
import { Avatar } from 'components/composed'
import dayjs from 'dayjs'
import { useInnerHtml } from 'hooks'
import { useMemo } from 'react'
import { TCommentTreeItem } from 'types'

export interface IChannelMessageCardProps extends Partial<TCommentTreeItem> {
    timesNested?: number
    isFirstNestedItem?: boolean
}

const ChannelMessageCard = ({
    timestamp,
    author,
    text,
    children,
    timesNested = 0,
    isFirstNestedItem = false
}: IChannelMessageCardProps) => {
    const textHtml = useInnerHtml(text)
    const formattedTime = useMemo(() => {
        if (!timestamp || !dayjs(timestamp).isValid()) {
            return undefined
        }

        return dayjs(timestamp).format('hh:mm A')
    }, [timestamp])

    const nestedMargin = useMemo(() => {
        return timesNested > 0 ? timesNested * 6 : 0
    }, [timesNested])

    return (
        <>
            <Flex
                as="article"
                gap="12"
                css={{
                    marginLeft: `${nestedMargin}rem`
                }}
            >
                {isFirstNestedItem && (
                    <Box
                        css={{
                            position: 'absolute',
                            top: '-$24',
                            left: '-$36',
                            height: '$48',
                            width: '$24',
                            borderLeft: '2px solid $gray',
                            borderBottom: '2px solid $gray',
                            borderBottomLeftRadius: '$4'
                        }}
                    ></Box>
                )}
                <Avatar imgSrc={author?.picture} alt={author?.name} shape="rounded" size="default" />
                <Flex direction="column" gap="12" css={{ flex: 1 }}>
                    <Card direction="column" gap="12" bgColor="chatMessage" hasBorder>
                        <Text color="primary" weight="semiBold" size="large">
                            {author?.name || 'Unknown user'}
                        </Text>
                        {text && <Text size="large" {...textHtml}></Text>}
                    </Card>
                    <Flex gap="8">
                        {formattedTime && (
                            <>
                                <Text>{formattedTime}</Text>
                                <Text>&#183;</Text>
                            </>
                        )}
                        <Text>Replay</Text>
                    </Flex>
                </Flex>
            </Flex>
            {!!children?.length &&
                children.map((item, index) => (
                    <ChannelMessageCard
                        key={item?.id}
                        {...item}
                        timesNested={timesNested + 1}
                        isFirstNestedItem={index === 0}
                    />
                ))}
        </>
    )
}

export { ChannelMessageCard }
