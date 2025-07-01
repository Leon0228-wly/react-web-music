import React,{ memo,useRef } from 'react'
import type { FC, ReactNode,ElementRef} from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import { NewAlbum } from './style'
import { Carousel } from 'antd'
import AreaHeader from '@/components/area-header'
import NewAlbumsCover from '@/components/album-cover'
interface IProps {
  name?: ReactNode
}
const NAlbum: FC<IProps> = () => {
  const {newAlbum} = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
      }), shallowEqualApp)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return <NewAlbum>
     <AreaHeader title='新碟上架'
           moreLink='/discover/album'
           />
     <div className="content">
      <div className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></div>
      <div className="banner">
        <Carousel ref={bannerRef} dots={false} speed={1000}>
          {[0,1].map((item)=>{
              return (
                <div  key={item} >
                  <div className='album-item'>
                    {newAlbum.slice(item*5,(item+1)*5).map((album)=>{
                    return <NewAlbumsCover key={album.id} itemdata={album}></NewAlbumsCover>
                  })}
                  </div>
                </div>
              )
            })}
        </Carousel>
      </div>
      <div className="sprite_02 arrow arrow-right" onClick={handleNextClick}></div>
     </div>
  </NewAlbum>
}

export default memo(NAlbum)
