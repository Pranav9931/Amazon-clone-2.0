import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import Banner1 from "../assets/Banner1.jpeg"
import Banner2 from "../assets/Banner2.jpeg"
import Banner3 from "../assets/Banner3.jpeg"

function Banner() {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent" />
        <Carousel
          showArrows={true}
          showStatus={false}
          autoPlay
          infiniteLoop
          stopOnHover={false}
          emulateTouch={false}
          autoFocus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src={Banner1}
              alt="Banner 1"
            />
          </div>
          <div>
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src={Banner2}
              alt="Banner 2"
            />
          </div>
          <div>
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src={Banner3}
              alt="Banner 3"
            />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Banner
