import { styled, keyframes } from 'theme'

const rotate = keyframes({
    '0%': { transform: 'rotate(0)' },
    '100%': { transform: 'rotate(360deg)' }
})

const Svg = styled('svg', {
    stroke: '$primary',
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0,
    width: '$32',
    height: '$32',
    animation: `1.4s linear 0s infinite normal none running ${rotate}`
})

const Loading = () => {
    return (
        <Svg viewBox="22 22 44 44">
            <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
        </Svg>
    )
}

export { Loading }
