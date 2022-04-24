import { AvatarStyled } from './avatar.styles'
import Image from 'next/image'
import { Stitches } from 'theme'

type TAvatarVariants = Stitches.VariantProps<typeof AvatarStyled>

export interface IAvatarProps extends TAvatarVariants {
    alt?: string
    imgSrc?: string
}

const Avatar = ({ imgSrc, alt, size, shape }: IAvatarProps) => {
    return (
        <AvatarStyled size={size} shape={shape}>
            {imgSrc && <Image src={imgSrc} alt={alt} width={48} height={48} />}
        </AvatarStyled>
    )
}

export { Avatar }
