import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { AreaH } from './style'
import { Link } from  'react-router-dom'
interface IProps {
  title?:string
  keywords?:string[]
  moreText?:string
  moreLink?:string
}
const AreaHeader: FC<IProps> = (props) => {
  const {title='默认标题',keywords=[],moreText='更多',moreLink='/'} = props
  return (
    <AreaH className='sprite_02'>
    <div className="left">
      <h3 className="title">{title}</h3>
      <div className="keywords">
        {keywords.map((item)=>{
          return (
            <div className="item" key={item}>
              <span className="text">{item}</span>
              <span className="divider">|</span>
            </div>
          )
        })
        }
      </div>
    </div>
    <div className="right">
      <Link to={moreLink} className="more">{moreText}</Link>
      <i className="icon sprite_02"></i>
    </div>
    </AreaH>

  )
}

export default memo(AreaHeader)
