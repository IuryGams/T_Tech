"use client";
import Image from "next/image";
import { BoxSlider, ContainerButtons, ContainerDotters, ContainerSlider, StyledDotter } from "./styled";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function Slider({autoSlide = false, autoSlideInterval = 3000} : {
    autoSlide: boolean;
    autoSlideInterval?: number;
}) {
    
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const images = [
        {
            title: "image1",
            url: "https://shopee.com.br/blog/wp-content/uploads/2021/12/Como-escolher-uma-placa-de-video-para-o-seu-PC.jpg"
        },
        {
            title: "image2",
            url: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/09/nvidia-lanca-placa-de-video-rtx-4090-de-24-gb-ate-4-vezes-mais-rapida.jpg"
        },
        {
            title: "image3",
            url: "https://s2-techtudo.glbimg.com/-J9OG-VJpwyQfS48dcKG-0oPhhg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/A/N/BpfhWUTSiubRqZDppavg/intel-arc-pro-capa.jpg"
        },
    ];

    const HandlerSlidePrev = () => setCurrentIndex(index => index === 0 ? images.length - 1 : index - 1);

    const HandlerSlideNext = () => setCurrentIndex(index => index === images.length - 1 ? 0 : index + 1);
    

    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(HandlerSlideNext, autoSlideInterval);
        return () => clearInterval(slideInterval);
    });

    return (
        <ContainerSlider>
            <BoxSlider $indexSlider={currentIndex} >
                {images.map((image, index) => {
                    const { url, title } = image;
                    return (
                        <figure key={index} >
                            <Image src={url} alt={title} fill />
                        </figure>
                    )
                })}
            </BoxSlider>
            <ContainerButtons>
                <button onClick={HandlerSlidePrev}>
                    <FaAngleLeft size={50} />
                </button>
                <button onClick={HandlerSlideNext}>
                    <FaAngleRight size={50}/>
                </button>
            </ContainerButtons>
            <ContainerDotters>
                {images.map((_, index) => {
                    return(
                        <StyledDotter  key={index} $numberSlider={currentIndex} $indexSlide={index}></StyledDotter>
                    )
                })}
            </ContainerDotters>
        </ContainerSlider>
    )
}