import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { SCover } from './style'
import { formatCount,formatImage } from '@/utils/fomat'
interface IProps {
  itemdata?:any
}
const SongsCover: FC<IProps> = (props) => {
  const {itemdata} = props


  return (
    <SCover>
      <div className="cover">
        <img src={formatImage(itemdata.picUrl,140)} alt={itemdata.id} />
        <div className="coverfooter sprite_cover">
          <div className="info sprite_cover">
            <span>
            <i className="sprite_icon count">{formatCount(itemdata.playCount)}</i>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className='bottom'>{itemdata.name}</div>
    </SCover>
  )
}

export default memo(SongsCover)
