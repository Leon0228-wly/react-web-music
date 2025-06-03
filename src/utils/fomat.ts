export function formatCount(count:number){
  if (count > 100000) {
    return `${Math.floor(count/10000)}万`;
  }
  return count;
}

export function formatImage(imgurl:string,width:number,height:number = width){
  return `${imgurl}?param=${width}y${height}`
}


export function getSongPlayUrl(id:number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}


export function formatMinuteSecond(time:number) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export interface ILyric {
  time: number
  text: string
}
const timeRegExp = /\[(\d{2})\:(\d{2})\.(\d{2,3})\]/g
export function parseLyric(lyricString:string){
  if (typeof lyricString !== 'string') {
    return [];
  }
  const lines: string[] = lyricString.split('\n');
  const lyrics:ILyric[]= []
  for(const line of lines){
    const results = timeRegExp.exec(line)
    if(!results) continue
    const time1 = Number(results[1])*60*1000
    const time2 = Number(results[2])*1000
    const time3 = results[3].length===3 ? Number(results[3]) :Number(results[3])*10
    const time = time1+time2+time3
    const text = line.replace(timeRegExp,'')
    lyrics.push({time,text})
  }
  return lyrics
}
