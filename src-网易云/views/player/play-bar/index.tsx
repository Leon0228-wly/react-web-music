import React,{ memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode} from 'react'
import { PlayerBarWrapper,BarControl,PlayInfo,Operator } from './style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatImage,getSongPlayUrl,formatMinuteSecond } from '@/utils/fomat'
import { changeLyricIndexAction, changePlayModeAction,fetchMusicAction } from '../store/player'
interface IProps {
  playMode?: number
}

const PlayerBar: FC<IProps> = () => {
  const { currentSong,lyrics,lyricsIndex,playMode } = useAppSelector((state)=>({
    currentSong : state.player.currentSong,
    lyrics:state.player.lyrics,
    lyricsIndex: state.player.lyricsIndex,
    playMode:state.player.playMode
  }),
  shallowEqualApp
  )
  const [messageApi,contextHolder ] = message.useMessage();
  const dispatch = useAppDispatch()
  const [isPlaying,setIsPlaying] = useState(false)
  const [progress,setProgress] = useState(0)
  const [duration,setDuration] = useState(0)
  const [currentTime,setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    audioRef.current
    ?.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      setIsPlaying(false);
      console.log('播放失败',err)
    });
    setDuration(currentSong.dt);
  }, [currentSong]);
  function handlePlayBynClick(){
    isPlaying
    ? audioRef.current?.pause()
    : audioRef.current?.play().catch(()=>setIsPlaying(false))
    setIsPlaying(!isPlaying);
  }
  // useEffect(() => {
  //   const audio = audioRef.current!;
  //   console.log('Audio元素创建', audio);

  //   // 手动绑定事件监听
  //   const handleEnd = () => console.log('原生结束事件触发');
  //   audio.addEventListener('ended', handleEnd);

  //   return () => {
  //     audio.removeEventListener('ended', handleEnd);
  //     console.log('Audio元素卸载');
  //   };
  // }, []);

  function handleTimeUpdata(){
    const currentTime = audioRef.current!.currentTime*1000
    const progress =  (currentTime /duration)*100
    setProgress(progress)
    setCurrentTime(currentTime)
    let index = lyrics.length-1
    for(let i=0;i<lyrics.length;i++){
      const lyricTime = lyrics[i].time
      if(lyricTime>currentTime){
        index = i-1
        break
      }
    }
    if(lyricsIndex===index || index===-1)  return
    dispatch(changeLyricIndexAction(index))
    // console.log('歌词',lyrics[index].text)

    // console.log(lyricsIndex);
  }
  function handleTimeEnded() {
    if(playMode===2){
      console.log('嘻嘻');
      audioRef.current!.currentTime = 0
      audioRef.current?.play().catch(() => setIsPlaying(false));
    }else {
      console.log('哈哈');
      handleChangeMusic(true)
    }
  }
  useEffect(() => {
    if (lyricsIndex!==-1) {
      console.log('歌词内容', lyrics[lyricsIndex].text);
      messageApi.open({
        content: lyrics[lyricsIndex].text,
        key: "lyric",
        duration: 0,
        className: 'lyric-message',
      })
      // messageApi.info(lyrics[lyricsIndex].text);
    }
  }, [lyricsIndex, lyrics]);
  function handleSliderChange(value:number){
    const currentTime = value/100*duration;
    audioRef.current!.currentTime = currentTime/1000
    setCurrentTime(currentTime)
    setProgress(value)
  }
  function changePlayMode (){
    const newMode = (playMode + 1) % 3;
    dispatch(changePlayModeAction(newMode));

  }
  function handleChangeMusic(isNext:boolean) {
    dispatch(fetchMusicAction(isNext))
  }
  return (
  <PlayerBarWrapper className='sprite_playbar'>
    <div className="content wrap-v3">
    <BarControl isPlaying={isPlaying}>
      <button className="btn sprite_playbar prev" onClick={()=>handleChangeMusic(false)}></button>
      <button className="btn sprite_playbar play" onClick={handlePlayBynClick}></button>
      <button className="btn sprite_playbar next" onClick={()=>handleChangeMusic(true)}></button>
    </BarControl>
      <PlayInfo>
        <Link to='/discover/player' className='image'>
          <img src={formatImage(currentSong?.al?.picUrl,34)} alt="" />
          <a href={getSongPlayUrl(currentSong.id)} ></a>
        </Link>
        <div className="info">
          <div className="song">
            <span className="song-name">{currentSong.name}</span>
            <span className="singer-name">{currentSong?.ar?.map((item:any) => item.name).join('/')}</span>
          </div>
          <div className="progress">
            <Slider
            step={0.5}
            value={progress}
            tooltip={{formatter:null}}
            onChange={handleSliderChange}
            onChangeComplete={handleSliderChange}
            />
            <div className="time">
              <span className="current">{formatMinuteSecond(currentTime)}</span>
              <span className="divider">/</span>
              <span className="duration">{formatMinuteSecond(currentSong?.dt)}</span>
            </div>
          </div>
        </div>
      </PlayInfo>
      <Operator playMode={playMode}>
      <div className="left">
            <button className="btn pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop" onClick={changePlayMode}></button>
            <button className="sprite_playbar btn playlist"></button>
            <a href="" className='audio-quality'></a>
          </div>
      </Operator>
    </div>
    {contextHolder}
    <audio ref={audioRef} onTimeUpdate={handleTimeUpdata} onEnded={handleTimeEnded}></audio>
  </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)


