import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import {TestWrapper} from './style'
import  { useAppSelector,shallowEqualApp } from '@/store'
import { changeLyricIndexAction, changePlayModeAction,fetchMusicAction } from '../store/player'
interface IProps {
  name?: ReactNode
}
const Test: FC<IProps> = () => {
  const { currentSong } = useAppSelector((state)=>({
    currentSong:state.player.currentSong
  })
  ,shallowEqualApp)
  console.log(currentSong)
  return <div>Template</div>
}

export default memo(Test)
