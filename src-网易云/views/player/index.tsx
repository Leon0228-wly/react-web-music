import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import { PlayerWrapper } from './style'

interface IProps {
  name?: ReactNode
}
const Player: FC<IProps> = () => {
  return <div>Player</div>
}

export default memo(Player)
