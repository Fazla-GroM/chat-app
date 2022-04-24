import { Flex, Text } from 'components/base'
import dayjs from 'dayjs'
import { cloneElement, useMemo } from 'react'
import { TCommentListItem } from 'types'

interface IChannelMessageGroupProps extends Partial<TCommentListItem> {
    children: React.ReactElement
}

const ChannelMessageGroup = ({ groupTimestamp, comments, children }: IChannelMessageGroupProps) => {
    const groupFormattedTime = useMemo(() => {
        if (!groupTimestamp || !dayjs(groupTimestamp).isValid()) {
            return undefined
        }

        const now = dayjs()
        const groupTime = dayjs(groupTimestamp)

        return now.isSame(groupTime, 'day') ? 'Today' : groupTime.format('dddd, DD.MM.YYYY')
    }, [groupTimestamp])

    return (
        <Flex direction="column" gap="48">
            {groupFormattedTime && (
                <Flex align="center" justify="center" css={{ position: 'sticky', top: 0, left: 0, zIndex: 2 }}>
                    <Text size="small">{groupFormattedTime}</Text>
                </Flex>
            )}
            <Flex gap="24" direction="column">
                {comments?.map(item => {
                    return cloneElement(children, { ...item, key: item?.id })
                })}
            </Flex>
        </Flex>
    )
}

export { ChannelMessageGroup }
