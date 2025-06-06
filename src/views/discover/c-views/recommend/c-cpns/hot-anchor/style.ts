import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding: 20px;
  .header {
    position: relative;
    height: 23px;
    border-bottom: 1px solid #ccc;
  }
  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
          &:hover {
            text-decoration: underline;
          }
        }

        .position {
          color: #666;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
`
