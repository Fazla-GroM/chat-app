import { styled } from 'theme'

const InputText = styled('input', {
    all: 'unset',
    fontFamily: '$primary',
    fontSize: '$default',
    color: '$textPrimary',

    variants: {
        size: {
            default: {
                height: '$56'
            }
        }
    }
})

export { InputText }
