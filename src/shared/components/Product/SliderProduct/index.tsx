"use client";
import { BoxSliderImage, FocusImage, Gallery, UnfocusedImage, Zoom } from './styled';
import Image from 'next/image';
import { Images, Products } from '@prisma/client';
import { MouseEvent, useState } from 'react';
import { CSSProperties } from 'styled-components';

export default function SliderProduct({ product }: {
    product?: Products & {
        images: Images[]
    }
}) {

    const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.images[0].image);
    const [zoom, setZoom] = useState<CSSProperties>({ backgroundImage: `url(${selectedImage})` })

    const MagnifyingSize = 200;
    const Magnifying_Half = MagnifyingSize / 2;
    
    const handleMouseMove = (e: MouseEvent): void => {
        
        const {offsetX, offsetY, target}  = e.nativeEvent;
        const {offsetWidth, offsetHeight} = target as HTMLElement

        const xPercentage = ((offsetX / offsetWidth) * 100).toFixed(2);

        const yPercentage = ((offsetY / offsetHeight) * 100).toFixed(2);
        
        setZoom( (prev) => ( {
            ...prev,
            display: "block",
            backgroundImage: `url(${selectedImage})`,
            top: `${offsetY}px`, 
            left: `${offsetX}px`,
            backgroundPosition: `${xPercentage}% ${yPercentage}%`} 
        ) )
    }

    const handleMouseLeave = (): void => setZoom(prev => ({...prev, display: "none"}))

    return (
        <Gallery>
            <BoxSliderImage>
                    {product?.images.map(image => {
                        return (
                            <UnfocusedImage key={image.id}>
                                <Image
                                    width={130}
                                    height={140}
                                    draggable={false}
                                    src={image.image}
                                    alt={product.name}
                                    style={{ border: selectedImage == image.image ? "1px solid var(--primary-color)" : "1px solid transparent" }}
                                    onClick={() => setSelectedImage(image.image)}
                                />
                            </UnfocusedImage>
                        )
                    })}
            </BoxSliderImage>
            <FocusImage>
                <Image
                    quality={100}
                    width={560} 
                    height={600} 
                    src={selectedImage || "Não foi possivel carregar a imagem"}  
                    alt={product?.name || "Não foi possivel carregar a imagem"}
                    draggable={false}
                    onMouseMove={(e) => handleMouseMove(e)}
                    onMouseLeave={handleMouseLeave}
                />
                <Zoom style={zoom}></Zoom>
            </FocusImage>
        </Gallery>
    );
}