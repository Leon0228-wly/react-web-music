import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Download: FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
