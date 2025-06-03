import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentSong, getSongLyric } from '../service/player'
import { parseLyric,ILyric } from '@/utils/fomat'
import { IRootState } from '@/store'

interface IThunkState {
  state:IRootState
}
export const fetchCurrentSongAction = createAsyncThunk<void,number,IThunkState>('currentSong',async(id,{dispatch,getState})=>{
  const songList = getState().player.songList
  const findSongIndex = songList.findIndex((item)=>item.id === id)
  if(findSongIndex===-1){
    getCurrentSong(id).then((res)=>{
      if(!res.songs.length) return
      const song = res.songs[0]
      let newSongList = [...songList]
      newSongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changeSongListAction(newSongList))
      dispatch(changeSongIndexAction(newSongList.length-1))
    })
  }
  else {
    const song = songList[findSongIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changeSongIndexAction(findSongIndex))
  }
  console.log('歌曲列表',songList)
  // 统一调用并添加错误处理
  getSongLyric(id)
  .then((res) => {
    const lyricString = res?.lrc?.lyric;
    const lyrics = parseLyric(lyricString);
    dispatch(changeLyricAction(lyrics));
  })
  .catch((err) => {
    console.error('歌词获取失败:', err);
  });
})
export const fetchMusicAction = createAsyncThunk<void,boolean,IThunkState>(
  'changeMusic',
  (isNext,{dispatch,getState}) => {
  const player = getState().player
  const songIndex = player.songIndex
  const playMope = player.playMode
  const songList = player.songList
  const len = songList.length
  let newIndex = songIndex
  if(playMope===1){
    newIndex = Math.floor(Math.random()*len)
  }else {
    newIndex = isNext ? (songIndex+1)%len : (songIndex - 1 + len) % len
  }
  const song = songList[newIndex]
  dispatch(changeCurrentSongAction(song))
  dispatch(changeSongIndexAction(newIndex))
  getSongLyric(song.id)
  .then((res) => {
    const lyricString = res?.lrc?.lyric;
    const lyrics = parseLyric(lyricString);
    dispatch(changeLyricAction(lyrics));
  })
  .catch((err) => {
    console.error('歌词获取失败:', err);
  });
})
interface IPlayerState {
  currentSong :any
  lyrics:ILyric[]
  lyricsIndex:number
  songList:any[]
  songIndex:number
  playMode:number
}
const initialState:IPlayerState = {
  currentSong:{},
  lyrics:[],
  lyricsIndex:-1,
  songList:[],
  songIndex: -1,
  playMode:0  //0顺序 ，1随机，2单曲循环
}
const playerSlice = createSlice({
  name:'player',
  initialState,
  reducers:{
    changeCurrentSongAction(state,{payload}){
      state.currentSong = payload
    },
    changeLyricAction(state,{payload}){
      state.lyrics = payload
    },
    changeLyricIndexAction(state,{payload}){
      state.lyricsIndex = payload
    },
    changeSongIndexAction(state,{payload}){
      state.songIndex = payload
    },
    changeSongListAction(state,{payload}){
      state.songList = payload
    },
    changePlayModeAction(state,{payload}){
      state.playMode = payload
    }
  }
})

export const { changeCurrentSongAction,changeLyricAction,changeLyricIndexAction,changeSongIndexAction,changeSongListAction,changePlayModeAction } = playerSlice.actions
export default playerSlice.reducer

