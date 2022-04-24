import { styled } from 'theme'
import { Flex } from './Flex'

const Card = styled(Flex, {
    variants: {
        padding: {
            8: {
                padding: '$8'
            },
            16: {
                padding: '$16'
            },
            24: {
                padding: '$24'
            }
        },
        shape: {
            rounded: {
                borderRadius: '$8'
            },
            square: {
                borderRadius: 0
            }
        },
        bgColor: {
            default: {
                backgroundColor: '$white'
            },
            chatMessage: {
                backgroundColor: '$messageBackground'
            }
        },
        hasBorder: {
            true: {
                border: '1px solid $commentBorder'
            }
        },
        hasShadow: {
            true: {
                boxShadow: '2px 4px 24px rgba(0, 0, 0, 0.1)'
            }
        }
    },
    defaultVariants: {
        padding: '24',
        shape: 'rounded',
        bgColor: 'default'
    }
})

export { Card }
