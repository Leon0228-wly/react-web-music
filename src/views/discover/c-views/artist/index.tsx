import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
