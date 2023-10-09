/* eslint-disable no-undef */
import { useCallback, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './swiperMotorcycles.css'

import { Autoplay, Thumbs } from 'swiper/modules'

import gsxR1000 from 'assets/motorcycles/gsxR1000.jpg'
import gsxS1000 from 'assets/motorcycles/gsxS1000.webp'
import r1 from 'assets/motorcycles/r1.jpg'
import z900 from 'assets/motorcycles/z900.jpg'

const listImg = [
  {
    name: 'gsxR1000',
    url: gsxR1000
  },
  {
    name: 'gsxS1000',
    url: gsxS1000
  },
  {
    name: 'r1',
    url: r1
  },
  {
    name: 'z900',
    url: z900
  }
]

export default function SwiperMotorcycles() {
  const [isShowImg, setIsShowImg] = useState(false)
  const [currentImg, setCurrentImg] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const swiperMotorcycles = useRef()

  const handleMouseEnter = useCallback(() => {
    swiperMotorcycles?.current?.swiper?.autoplay?.stop()
  }, [])

  const handleMouseLeave = useCallback(() => {
    swiperMotorcycles?.current?.swiper?.autoplay?.start()
  }, [])

  const handleClickImg = useCallback((url) => {
    setIsShowImg((e) => !e)
    setCurrentImg(url)
  }, [])

  const renderSwiper = useCallback(() => {
    const render = listImg.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <img
            onClick={() => handleClickImg(item.url)}
            src={item.url}
            alt="..."
          />
        </SwiperSlide>
      )
    })

    return render
  }, [handleClickImg])

  // useEffect(() => {
  // console.log('««««« currentImg »»»»»', currentImg)
  // }, [currentImg])

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cover_swiper"
    >
      <div
        onClick={handleClickImg}
        className={isShowImg ? 'cover_show_img' : 'cover_show_img_hiden'}
      >
        <div className={isShowImg ? 'cover_img' : 'cover_img_hiden'}>
          <img
            className='show_img'
            src={currentImg}
            alt="..."
          />
        </div>
      </div>

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
        // onClick={handleClickImg}
      >
        {renderSwiper()}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
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
