import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'

interface IProps {
  name?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
