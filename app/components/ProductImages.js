import React, { useState } from 'react'
import { adminHost } from './Header'
import { HeroImage, MiniImages, MiniImagesBox } from './styles/StyledProductDetails'
import { FlexCenter } from './styles/Center';

const ProductImages = ({ images }) => {
    const [activeImg, setActiveImg] = useState(0);

    return (
        <>
            <MiniImagesBox>
                {images.map((img, index) => (
                    <MiniImages key={img} alt="product image"
                        onMouseEnter={() => setActiveImg(index)}
                        src={`${adminHost}/${img}`}
                        active={activeImg == index ? 1 : 0} />
                ))}
            </MiniImagesBox>

            <FlexCenter>
                <HeroImage src={`${adminHost}/${images[activeImg]}`} alt="product image" />
            </FlexCenter>
        </>
    )
}

export default ProductImages