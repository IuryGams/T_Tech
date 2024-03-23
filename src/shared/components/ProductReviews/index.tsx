import { Reviews } from "@prisma/client";
import { FaStar, FaStarHalfAlt, } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

function ProductReview({reviews, size = 18, gap, justifyContent, showReviews = true}: {
    reviews?: Reviews[];
    size?: number;
    gap?: number;
    showReviews?: boolean;
    justifyContent: "flex-start" | "center" | "flex-end"
}) {
    const styles = {
        display: "flex",
        alignItems: "center",
        // justifyContent: justifyContent,
        gap: gap
    }

    const stylesStars = {
        fill: "var(--primary-color)"
    }

    // stars = reviews
    // reviews = reviews.length

    const Rating = Number(reviews?.reduce((acc: number, review) => review.rating + acc, 0)) / Number(reviews?.length)

    const ratingStar = Array.from({length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index} >
                {
                    Rating >= index + 1 ? <FaStar style={stylesStars} size={size}/> : Rating >= number ? <FaStarHalfAlt style={stylesStars} size={size} /> : <AiOutlineStar style={stylesStars} size={Number(size) + 3}/>
                }
            </span>
        )
    })


    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: `${justifyContent}`, gap: "8px", padding: "0.5em 0"}}>
            <div style={styles}>
                {ratingStar}
            </div>
            {/* {showReviews && <span style={{color: "var(--subtext-color)"}}>{Number(reviews?.length)} avaliações</span>} */}
            {showReviews ? <span style={{color: "var(--subtext-color)"}}>{Number(reviews?.length)} avaliações</span> : <span style={{fontSize: "12px"}}>({Number(reviews?.length)})</span>}
        </div>
    );
}

export default ProductReview;