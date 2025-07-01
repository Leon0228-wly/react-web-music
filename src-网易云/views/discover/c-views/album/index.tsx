import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
