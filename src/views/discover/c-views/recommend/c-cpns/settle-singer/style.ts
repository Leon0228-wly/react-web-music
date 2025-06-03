import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  padding: 20px;
  .header {
    position: relative;
    height: 23px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .singer {
      color: #000;
      font-weight: 500;
    }
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .artists {
    .list {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;
      :hover {
        background-color: #f4f4f4;
      }
      img {
        width: 62px;
        height: 62px;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        overflow: hidden;
        .title {
          color: #000;
          font-size: 14px;
          font-weight: 700;
        }
        .name {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .apply {
    margin-top: 12px;
    background-position:0 -59px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
    &:hover {
        background-position:0 -141px;
      }
  }
`
