import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight,HeaderWrapper } from './style'
import headerTitles from '@/data/header_titles.json'
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface IProps {
  name?: ReactNode
}
const Header: FC<IProps> = () => {
  function showItem(item:any) {
    if(item.type === 'path'){
      return <NavLink to={item.link} className={({isActive})=>{
        return isActive ? 'active' : undefined
      }}>{item.title}
      <i className="icon sprite_01"></i>
      </NavLink>
    }
    else{
      return <a href={item.link} rel="noreferrer" target='_blank'>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a className='logo sprite_01' href="/#">网抑☁️音乐</a>
            <div className="title-list">
              {headerTitles.map((item)=>{
                return <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              })
              }
            </div>
          </HeaderLeft>
          <HeaderRight>
            <span className="search">
              <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
            </span>
            <div className="center">创作者中心</div>
            <a href='#' className="login">登陆</a>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
  )
}

export default memo(Header)
