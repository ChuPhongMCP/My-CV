/* eslint-disable no-undef */
import { useCallback, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './swiperMotorcycles.css'

// import required modules
import { Autoplay, Thumbs } from 'swiper/modules'

export default function SwiperMotorcycles() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const swiperMotorcycles = useRef()

  const handleMouseEnter = useCallback(() => {
    swiperMotorcycles?.current?.swiper?.autoplay?.stop()
  }, [])

  const handleMouseLeave = useCallback(() => {
    swiperMotorcycles?.current?.swiper?.autoplay?.start()
  }, [])

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cover_swiper"
    >
      <Swiper
        ref={swiperMotorcycles}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        // loop={true}
        spaceBetween={0}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[Autoplay, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={require('assets/motorcycles/gsxR1000.jpg')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/gsxS1000.webp')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/r1.jpg')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/z900.jpg')} alt="..." />
        </SwiperSlide>
      </Swiper>

      <Swiper
        // loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={3}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, Thumbs]}
        className="mySwiper"
        // direction="vertical"
      >
        <SwiperSlide>
          <img src={require('assets/motorcycles/gsxR1000.jpg')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/gsxS1000.webp')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/r1.jpg')} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={require('assets/motorcycles/z900.jpg')} alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
