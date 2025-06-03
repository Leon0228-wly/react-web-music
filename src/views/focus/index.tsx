import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Focus: FC<IProps> = () => {
  return <div>focus</div>
}

export default memo(Focus)
