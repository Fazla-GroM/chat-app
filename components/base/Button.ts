import { styled } from 'theme'

const ButtonBase = styled('button', {
    all: 'unset',
    cursor: 'pointer',
    fontFamily: '$primary',
    fontWeight: '$semiBold'
})

const ButtonFilled = styled(ButtonBase, {
    borderRadius: '$6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
        width: '$24',
        height: '$24'
    },

    variants: {
        size: {
            default: {
                height: '$56',
                px: '$16',
                fontSize: '$large'
            }
        },
        color: {
            primary: {
                backgroundColor: '$primary',
                color: '$white'
            }
        }
    },
    defaultVariants: {
        color: 'primary',
        size: 'default'
    }
})

const ButtonIcon = styled(ButtonBase, {
    borderRadius: '$6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
        color: {
            primary: {
                backgroundColor: '$primary',
                color: '$white'
            }
        },
        size: {
            default: {
                width: '$56',
                height: '$56',
                '& svg': {
                    width: '$24',
                    height: '$24'
                }
            }
        }
    },
    defaultVariants: {
        color: 'primary',
        size: 'default'
    }
})

export { ButtonBase, ButtonFilled, ButtonIcon }
