import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import {useAppDispatch } from '@/store'
import { fetchBannerDataAction, fetchHotRecommendAction,fetchNewAlbumAction,fetchPlayListDetailAction,fetchRecommendDataAction } from './store'
import TopBanner from './c-cpns/banner'
import {RecommendWrapper,RecommendSection,RecommendLeft,RecommendRight} from './style'
import  HotRecommend from './c-cpns/hot-recommend'
import NAlbum from './c-cpns/new-album'
import TopRank from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import Settlesinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'
interface IProps {
  title?: string
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchPlayListDetailAction())
    dispatch(fetchRecommendDataAction())
  },[])
  return <RecommendWrapper>
    <TopBanner/>
    <RecommendSection className='content wrap-v2'>
      <RecommendLeft>
      <HotRecommend></HotRecommend>
      <NAlbum/>
      <TopRank/>
      </RecommendLeft>
      <RecommendRight>
        <UserLogin/>
        <Settlesinger/>
        <HotAnchor/>
      </RecommendRight>
    </RecommendSection>
    </RecommendWrapper>
}

export default memo(Recommend)
