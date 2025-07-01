import styled from 'styled-components'

export const AlbumsCover = styled.div`
  .top {
    position:relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;
    .cover{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
    & > img{
        width: 100px;
        height: 100px;
      }
    }
  .bottom {
    font-size: 12px;
    width: 100px;
    .name {
      padding-top: 10px;
      color: #000;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
      overflow: hidden;
    }
  }
`
