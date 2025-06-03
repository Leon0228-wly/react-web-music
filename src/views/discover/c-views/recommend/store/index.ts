import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend,getNewAlbums,getPlayListDetail,getArtistList } from '../service'
export const fetchBannerDataAction = createAsyncThunk('banners',async(arg,{dispatch})=>{
  const res = await getBanners()
  dispatch(changeBannersAction(res.banners))
})
export const fetchHotRecommendAction = createAsyncThunk('personalized',async(arg,{dispatch})=>{
  const res = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})
export const fetchNewAlbumAction = createAsyncThunk('/album/newest',async(arg,{dispatch})=>{
  const res = await getNewAlbums()
  dispatch(changeNewAlbumAction(res.albums))
})
const rankingId = [19723756,3779629,2884035]
export const fetchPlayListDetailAction = createAsyncThunk('playlist/detail',async(arg,{dispatch})=>{
  const promises: Promise<any>[] = []
  for(const id of rankingId){
    promises.push(getPlayListDetail(id))
  }
  Promise.all(promises).then((res)=>{
    const playlist = res
    .filter((item)=>item.playlist)
    .map((item)=>item.playlist)
    dispatch(changePlayListDetailAction(playlist))
  })
})
export const fetchRecommendDataAction = createAsyncThunk(
  '/fetchdata',
  (_, {dispatch})=>{
    getArtistList(5).then((res)=>{
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)
// export const fetchArtistListAction = createAsyncThunk('/artist/list',async(arg,{dispatch})=>{
//   const res = await getArtistList(5)
//   dispatch(changeSettleSingersAction(res.artists))
//   console.log(res)
// })
interface IRecommendState{
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  rankings:any[]
  settleSingers:any[]
}

const initialState: IRecommendState={
  banners:[],
  hotRecommend:[],
  newAlbum:[],
  rankings:[],
  settleSingers:[]
}
const recommendSlice = createSlice({
  name:'recommend',
  initialState,
  reducers: {
    changeBannersAction(state,{payload}){
      state.banners = payload
    },
    changeHotRecommendAction(state,{payload}){
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state,{payload}){
      state.newAlbum = payload
    },
    changePlayListDetailAction(state,{payload}){
      state.rankings = payload
    },
    changeSettleSingersAction(state,{payload}){
      state.settleSingers = payload
    }
  }
 })
export const { changeBannersAction,changeHotRecommendAction,changeNewAlbumAction,changePlayListDetailAction,changeSettleSingersAction } = recommendSlice.actions
export default recommendSlice.reducer
