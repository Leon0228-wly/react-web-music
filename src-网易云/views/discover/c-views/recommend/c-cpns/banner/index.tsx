import { shallowEqualApp, useAppSelector } from '@/store'
import React,{ memo,useEffect,useRef, useState } from 'react'
import { Carousel } from "antd";
import type { FC, ReactNode ,ElementRef} from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
import { BannerWrapper,BannerRight,BannerLeft,BannerControl } from './style'
import classNames from 'classnames'
interface IProps {
  name?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqualApp)
  const [currentImage,setImage] = useState(0)
  const [backgroundUrl, setBackgroundUrl] = useState('')

  function handleChange(current: number, newIndex: number){
    setImage(newIndex)
    // console.log(current,currentImage)
  }
  function changeBanner(newIndex:number){
    setImage(newIndex)
    bannerRef.current?.goTo(newIndex)
  }
  useEffect(() => {
    const newUrl = banners[currentImage]?.imageUrl
    if (newUrl) {
      const optimizedUrl = `${newUrl}?imageView&blur=40x20`
      // 预加载逻辑
      const img = new Image()
      img.src = optimizedUrl
      img.onload = () => {
        setBackgroundUrl(optimizedUrl)
      }
    }
  }, [currentImage, banners])
  // let bigImgUrl = banners[currentImage]?.imageUrl
  // console.log(bigImgUrl)
  // if(bigImgUrl){
  //   bigImgUrl = bigImgUrl + "?imageView&blur=40x20"
  // }
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  return (
    <BannerWrapper style={{
        background:`url('${backgroundUrl}') center center/6000px`,
        transition: 'background 500ms ease-out'
      }}>
      <div className="banner wrap-v2">
      <BannerLeft>
        <Carousel ref={bannerRef} autoplay autoplaySpeed={5000} dots={false} effect="fade" speed={1000} beforeChange={handleChange}>
          {banners.map((item) => {
            return (
              <div key={item.imageUrl} className='banner-item'>
                <img src={item.imageUrl} alt={item.typeTitle} className='image'/>
              </div>
            )
          })}
        </Carousel>
        <ul className="dots">
        {banners.map((item,index) => {
            return (
              <li key={item.imageUrl} onClick={() => changeBanner(index)}>
                <span className={classNames('item',{active : index===currentImage})}></span>
              </li>
            )
          })}
        </ul>
      </BannerLeft>
      <BannerRight/>
      <BannerControl>
        <button className="btn left" onClick={()=> {bannerRef.current?.prev()}}></button>
        <button className="btn right" onClick={()=> {bannerRef.current?.next()}}></button>
      </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
