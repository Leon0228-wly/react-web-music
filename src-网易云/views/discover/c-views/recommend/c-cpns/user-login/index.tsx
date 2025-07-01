import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { LoginWrapper } from './style'
import disVipCard from '@/assets/img/dis_vip_card.png';

interface IProps {
  name?: ReactNode
}
const UserLogin: FC<IProps> = () => {
  return (
    <LoginWrapper>
      <div className="top">
        <img src={disVipCard} alt="" />
      </div>
      <div className="bottom sprite_02">
        <p className="desc ">登陆网抑☁️音乐,emo一下</p>
        <a href="/login" className='sprite_02'>用户登陆</a>
      </div>

    </LoginWrapper>
  )
}

export default memo(UserLogin)
