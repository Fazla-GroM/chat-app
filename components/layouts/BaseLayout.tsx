import { Flex } from 'components/base'

export interface IBaseLayout {
    children: React.ReactNode
}

const BaseLayout = ({ children }: IBaseLayout): JSX.Element => {
    return (
        <Flex
            as="main"
            direction="column"
            css={{
                minHeight: '100vh'
            }}
        >
            {children}
        </Flex>
    )
}

export { BaseLayout }
