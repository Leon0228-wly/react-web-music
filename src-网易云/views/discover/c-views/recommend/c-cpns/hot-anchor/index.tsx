import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { HotAnchorWrapper } from './style'
import {hotRadios} from '@/data/local_data'
interface IProps {
  name?: ReactNode
}
const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <div className="header">
        <span className="singer">热门歌手</span>
      </div>
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href={item.url} className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <a className="name" href={item.url}>{item.name}</a>
                  <div className="position">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
