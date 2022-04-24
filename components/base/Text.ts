import { styled } from 'theme'

const Text = styled('p', {
    fontFamily: '$primary',

    variants: {
        size: {
            small: {
                fontSize: '$small'
            },
            default: {
                fontSize: '$default'
            },
            large: {
                fontSize: '$large'
            }
        },
        color: {
            primary: {
                color: '$textPrimary'
            },
            secondary: {
                color: '$textSecondary'
            }
        },
        weight: {
            medium: {
                fontWeight: '$medium'
            },
            semiBold: {
                fontWeight: '$semiBold'
            }
        }
    },

    defaultVariants: {
        size: 'default',
        color: 'secondary',
        weight: 'medium'
    }
})

export { Text }
