import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { RankingItemWrap } from './style'
import {formatImage} from '@/utils/fomat'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
interface IProps {
  name?: ReactNode
  itemData:any
}
const SingleRankings: FC<IProps> = (props) => {
  const {itemData} = props
  const {tracks=[]} = itemData
  const dispatch = useAppDispatch()
  function handlePlayClick(id:number){
    dispatch(fetchCurrentSongAction(id))
  }
  return (
  <RankingItemWrap>
    <div className="header">
      <div className="image">
        <img src={formatImage(itemData.coverImgUrl,100)} alt="" />
        <a href='' className='cover sprite_cover'></a>
      </div>
      <div className="info">
        <div className="name">{itemData.name}</div>
        <div>
          <button className="sprite_02 btn play"></button>
          <button className="sprite_02 btn favor"></button>
        </div>
      </div>
    </div>
    <div className="list">
      {
      tracks.slice(0,10).map((item:any,index:number)=>{
        return (
          <div className="item" key={item.id}>
            <div className="index">{index+1}</div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="operator">
                <button className="sprite_02 btn play" onClick={()=>handlePlayClick(item.id)}></button>
                <button className="sprite_icon2 btn add"></button>
                <button className="sprite_02 btn favor"></button>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
    <div className="footer">
      <a href="/discover/ranking">查看全部&gt;</a>
    </div>
  </RankingItemWrap>
  )
}

export default memo(SingleRankings)
