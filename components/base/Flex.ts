import { styled } from 'theme'

const Flex = styled('div', {
    display: 'flex',
    position: 'relative',

    variants: {
        direction: {
            row: {
                flexDirection: 'row'
            },
            column: {
                flexDirection: 'column'
            },
            rowReverse: {
                flexDirection: 'row-reverse'
            },
            columnReverse: {
                flexDirection: 'column-reverse'
            }
        },
        align: {
            start: {
                alignItems: 'flex-start'
            },
            center: {
                alignItems: 'center'
            },
            end: {
                alignItems: 'flex-end'
            },
            stretch: {
                alignItems: 'stretch'
            },
            baseline: {
                alignItems: 'baseline'
            }
        },
        justify: {
            start: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            end: {
                justifyContent: 'flex-end'
            },
            between: {
                justifyContent: 'space-between'
            }
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap'
            },
            wrap: {
                flexWrap: 'wrap'
            },
            wrapReverse: {
                flexWrap: 'wrap-reverse'
            }
        },
        gap: {
            4: {
                gap: '$4'
            },
            8: {
                gap: '$8'
            },
            12: {
                gap: '$12'
            },
            16: {
                gap: '$16'
            },
            20: {
                gap: '$20'
            },
            24: {
                gap: '$24'
            },
            32: {
                gap: '$32'
            },
            48: {
                gap: '$48'
            },
            64: {
                gap: '$64'
            }
        }
    },
    defaultVariants: {
        direction: 'row',
        align: 'stretch',
        justify: 'start',
        wrap: 'noWrap'
    }
})

export { Flex }
