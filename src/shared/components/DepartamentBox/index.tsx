import Link from "next/link";
import { BoxDepartament, DepartamentBody, DepartamentBoxImage } from "./styled";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

// https://s2-ge.glbimg.com/UmcC4TyoRoi_fHaXUuU7PEEv3Ng=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/k/f/4gDXVBR8iLNA2GTd8acA/foto-nvidia-rtx-3090.png


export default function DepartamentBox({ path, image_url, image_description, title}: {
    path: string;
    image_url: string;
    image_description: string;
    title: string;
}) {
    return (
        <BoxDepartament>
            <Link href={path} >
                <DepartamentBoxImage>
                    <Image src={image_url} fill alt={image_description} />
                </DepartamentBoxImage>
                <DepartamentBody>
                    <h3>{title}</h3>
                    <span>Comprar Agora <FaArrowAltCircleRight size={18} /> </span>
                </DepartamentBody>
            </Link>
        </BoxDepartament>
    )
} 