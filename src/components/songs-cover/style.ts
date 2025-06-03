import styled from 'styled-components'

export const SCover = styled.div`
  width: 140px;
  margin: 15px 0;
  .cover {
    position:relative;
    & > img{
      width: 140px;
      height: 140px;
    }
    .coverfooter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
        .count{
          margin-right: 5px;
          padding-left: 15px;
          display: inline-block;
          width: 18px;
          height: 14px;
          background-position: 0 -24px;
          white-space: nowrap;
        }
      }
    }
  }
  .bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`
