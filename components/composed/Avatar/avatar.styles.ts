import { styled } from 'theme'

const AvatarStyled = styled('div', {
    backgroundColor: '$gray',
    border: '1px solid $white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    variants: {
        size: {
            default: {
                width: '$48',
                height: '$48'
            }
        },
        shape: {
            rounded: {
                borderRadius: '100%'
            },
            square: {
                borderRadius: '$8'
            }
        }
    },
    defaultVariants: {
        size: 'default',
        shape: 'rounded'
    }
})

export { AvatarStyled }
