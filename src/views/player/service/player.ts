import hyRequest from '@/service'
export function getCurrentSong(ids:number) {
  return hyRequest.get({
    url:'/song/detail',
    params:{
      ids
    }
  })
}

export function getSongLyric(id:number){
  return hyRequest.get({
    url:'/lyric',
    params:{
      id
    }
  })
}
