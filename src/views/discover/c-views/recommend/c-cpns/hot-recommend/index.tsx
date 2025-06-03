import React,{ memo } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import type { FC, ReactNode} from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeader from '@/components/area-header'
import SongsCover from '@/components/songs-cover'
interface IProps {
  name?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector((state) => ({
    hotRecommend: state.recommend.hotRecommend
    }), shallowEqualApp)
  return (
    <HotRecommendWrapper>
      <AreaHeader title='热门推荐'
       keywords={['华语','流行','摇滚','民谣','电子']}
       moreLink='/discover/songs'
       />
       <div className="hot-recommend">
       {
        hotRecommend.map((item)=>{
          return (
            <SongsCover  key={item.id} itemdata={item}/>
          )
        })
       }
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
