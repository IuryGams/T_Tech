
import FeaturedSession from "@/shared/components/FeaturedSession";
import { ContainerGrid } from "@/shared/components/FeaturedSession/styled";
import Slider from "@/shared/components/Slider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SessionCategories } from "@/shared/components/DepartamentBox/styled";
import DepartamentBox from "@/shared/components/DepartamentBox";
import getAllProducts from "@/shared/actions/getAllProducts";
import ProductCard from "@/shared/components/ProductCard";
import CarrouselProducts from "@/shared/components/CarrouselProducts";


export default async function Home() {

  const products = await getAllProducts()

  const categories = [
    {
      title: "Hardware",
      image_url: "https://s2-ge.glbimg.com/UmcC4TyoRoi_fHaXUuU7PEEv3Ng=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/k/f/4gDXVBR8iLNA2GTd8acA/foto-nvidia-rtx-3090.png"
    },
    {
      title: "Periféricos",
      image_url: "https://assets.corsair.com/image/upload/f_auto,q_auto/v1/akamai/pdp/hs70-bluetooth/images/HS70_Bluetooth_02%202.png"
    },
    {
      title: "Jogos / Games",
      image_url: "https://images6.alphacoders.com/926/926723.jpg"
    },
    {
      title: "Outros",
      image_url: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/mrapkoeh/file.png"
    },
  ]

  return (
    <main>
      <Slider autoSlide autoSlideInterval={5000} />

      <FeaturedSession title="Promoção Semana do consumidor">
          <CarrouselProducts  products={products} />
      </FeaturedSession>


      <FeaturedSession title="Navegar por Categoria">
        <SessionCategories>
            {categories.map((category, index) => {
              const { title, image_url } = category;
              return(
                <DepartamentBox key={index} image_description={title} title={title} image_url={image_url} path="" />
              )
            })}
        </SessionCategories>
      </FeaturedSession>


      <FeaturedSession title="Mais Procurados" >
        <ContainerGrid>
          {/* {products?.map(product => <ProductCard key={product.id} path={product.id} product={product} /> )} */}
        </ContainerGrid>
      </FeaturedSession>

    </main>
  );
}
