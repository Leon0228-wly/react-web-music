import styled from 'styled-components'

export const AreaH = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  display: flex;
  justify-content: space-between;
  .left{
    display:flex;
    align-items: center;
  .title{
    margin: 0;
    font-size: 20px;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    margin-right: 20px;
  }
  .keywords{
    display:flex;
    align-items: center;
    .item {
      position: relative;
      top: 2px;
        .divider{
          margin: 0 15px;
          color: #ccc;
        }
      .text {
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .item:last-child {
      .divider {
        display: none;
      }
    }
  }
}
.right{
  display: flex;
  align-items: center;
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position:0 -240px;
  }
  .more {
    &:hover {
      text-decoration: underline;
      color:#333;
    }
  }
}

`
