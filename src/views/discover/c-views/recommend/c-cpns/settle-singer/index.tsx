import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { SettleSingerWrapper } from './style'
import { useAppSelector } from '@/store'
import {formatImage} from '@/utils/fomat'
interface IProps {
  name?: ReactNode
}
const Settlesinger: FC<IProps> = () => {
  // const { settleSingers } = useAppSelector((state)=>{
  //   settleSingers:state.recommend.settleSingers
  // })
  const { settleSingers } = useAppSelector((state) => {
    return {
      settleSingers: state.recommend.settleSingers
    }
  })
  return (
    <SettleSingerWrapper>
      <div className="header">
        <span className="singer">入驻歌手</span>
        <a href='/discover/artist' className="more">查看更多&gt;</a>
      </div>
      <div className="artists">
        {
          settleSingers.map((item)=>{
            return (
              <a href="/discover/artist" className='list' key={item.id}>
                <img src={formatImage(item.img1v1Url,62)} alt="" />
                <div className="info">
                  <h4 className='title'>{item.name}</h4>
                  <p className='name'>{item.alias}</p>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply sprite_btn">
        <a target='blank' href="https://music.163.com/st/musician">全名制作人的朋友们大家好</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(Settlesinger)
