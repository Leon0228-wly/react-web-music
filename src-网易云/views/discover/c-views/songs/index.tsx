import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
