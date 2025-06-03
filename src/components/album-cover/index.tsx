import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { AlbumsCover } from './style'
import { formatCount,formatImage } from '@/utils/fomat'
interface IProps {
  itemdata?:any
}
const NewAlbumsCover: FC<IProps> = (props) => {
  const {itemdata} = props
  return (
    <AlbumsCover>
      <div className="top">
        <img src={formatImage(itemdata.picUrl,100)} alt={itemdata.id} />
        <a href="" className='cover sprite_cover'></a>
      </div>
      <div className='bottom'>
        <div className="name">{itemdata.name}</div>
        <div className="artist">{itemdata.artist.name}</div>
      </div>
    </AlbumsCover>
  )
}

export default memo(NewAlbumsCover)
