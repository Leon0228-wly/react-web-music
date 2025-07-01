import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { TopRanking } from './style'
import AreaHeader from '@/components/area-header'
import { shallowEqualApp, useAppSelector } from '@/store'
import SingleRankings from '../top-ranking-single'
interface IProps {
  name?: ReactNode
}
const TopRank: FC<IProps> = () => {
  const {rankings=[]} = useAppSelector((state)=>({
    rankings: state.recommend.rankings
  }),
  shallowEqualApp
)
  return <TopRanking>
    <AreaHeader title='榜单'
           moreLink='/discover/ranking'
           />
    <div className="content">
      {rankings.map((item)=>{
          return <SingleRankings
          key={item.id}
          itemData={item}/>
        })
      }
    </div>
    </TopRanking>
}

export default memo(TopRank)
