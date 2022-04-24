import { Card, Flex } from 'components/base'

const ChannelChatBoxInput = () => {
    return (
        <Card hasBorder hasShadow bgColor="default">
            <Flex>
                <button>+</button>
                <input type="text"></input>
                <button>Send message</button>
            </Flex>
        </Card>
    )
}

export { ChannelChatBoxInput }
