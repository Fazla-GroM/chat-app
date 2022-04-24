import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        fonts: {
            primary: 'Inter'
        },
        fontSizes: {
            htmlFontSize: '62.5%',
            bodyFontSize: '1.6rem',
            small: '1.3rem', //13px
            default: '$bodyFontSize',
            large: '1.8rem' //18px
        },
        fontWeights: {
            medium: 500,
            semiBold: 600
        },

        space: {
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            12: '1.2rem', //12px
            16: '1.6rem', //16px
            20: '2rem', //20px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            36: '3.6rem', //36px
            48: '4.8rem', //48px
            56: '5.6rem', //56px
            64: '6.4rem', //64px
            80: '8.0rem' //80px
        },
        sizes: {
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            12: '1.2rem', //12px
            16: '1.6rem', //16px
            20: '2rem', //20px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            36: '3.6rem', //36px
            48: '4.8rem', //48px
            56: '5.6rem', //56px
            64: '6.4rem', //64px
            80: '8.0rem' //80px
        },
        radii: {
            6: '6px',
            8: '8px',
            4: '4px'
        },
        shadows: {
            elevation1: '2px 4px 24px rgba(0, 0, 0, 0.1)'
        },
        colors: {
            white: '#fff',
            black: '#333333',
            blue: '#023168',
            gray: '#D8DEE7',
            grayLight: '#ECEEF1',
            grayDark: '#82878D',
            primary: '$blue',
            textPrimary: '$black',
            textSecondary: '$grayDark',
            commentBorder: '$gray',
            messageBackground: '$white',
            chatBackground: '$grayLight',
            background: '$blue'
        }
    },
    utils: {
        p: (value: Stitches.PropertyValue<'padding'>) => ({
            padding: value
        }),
        pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
            paddingTop: value
        }),
        pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
            paddingRight: value
        }),
        pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
            paddingBottom: value
        }),
        pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value
        }),
        px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
            paddingBottom: value
        }),

        m: (value: Stitches.PropertyValue<'margin'>) => ({
            margin: value
        }),
        mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
            marginTop: value
        }),
        mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
            marginRight: value
        }),
        mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
            marginBottom: value
        }),
        ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
            marginLeft: value
        }),
        mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: Stitches.PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value
        }),

        ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

        fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
        fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

        ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
        ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
        jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
        as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
        fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
        fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
        fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value
        }),

        br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
            borderRadius: value
        }),
        btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
            borderTopRightRadius: value
        }),
        bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
            borderBottomRightRadius: value
        }),
        bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
            borderBottomLeftRadius: value
        }),
        btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
            borderTopLeftRadius: value
        }),

        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

        lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
        us: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),

        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),

        size: (value: Stitches.PropertyValue<'width'>) => ({
            width: value,
            height: value
        }),

        appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
            WebkitAppearance: value,
            appearance: value
        }),
        backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        })
    }
})

const injectGlobalStyles = globalCss({
    '@import': ['url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap")'],
    '*,*::before,*::after': {
        boxSizing: 'border-box',
        margin: 0
    },

    html: {
        fontSize: '$htmlFontSize',
        textSizeAdjust: '100%'
    },
    body: {
        minHeight: '100vh',
        backgroundColor: '$background',
        fontSize: '$bodyFontSize',
        fontFamily: '$primary',
        lineHeight: '1.5',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    },
    '#__next': {
        minHeight: '100vh',
        position: 'relative',
        isolation: 'isolate'
    }
})

export { styled, getCssText, injectGlobalStyles, keyframes, Stitches }
