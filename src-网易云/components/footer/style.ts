import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .content {
    padding-top: 33px;
    .top {
      ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        li:nth-child(1) {
          margin-left: 0;
        }
        li {
          display: flex;
          flex-direction: column;
          margin-left: 58px;
          .tt{
            display: inline-block;
            width: 100px;
            margin-top: 10px;
            margin-left: -27.5px;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
          }
          .logonew{
            display: inline-block;
            width: 45px!important;
            height: 45px!important;
            background-size: 220px 220px;
            &.logo-openplatform{
              background-position: -170px -5px;//-5px -170px;
            }
            &.logo-trade{
              background-position:-5px -170px;
            }
            &.logo-xstudio{
              background-position:0 0;
              background-size: 45px;
            }
            &.logo-auth{
              background-position:-60px -60px;
            }
            &.logo-musician{
              background-position:0 0;
              background-size: 45px;
            }
            &.logo-cloudsong{
              background-position:0 0;
              background-size: 45px;
            }
            &.logo-reward{
              background-position:-170px -115px;
            }
          }
        }
      }
    }
    .bottom {
      padding-top: 60px;
      text-align: center;
      >p,a{
        color: #666;
      }
      a:hover{
        text-decoration: underline;
      }
      .right a{
        margin-right: 14px;
      }
      .police-logo{
        width: 14px;
        height: 14px;
        background: url(${require('@/assets/img/police.png')}) no-repeat;
        background-size: cover;
        display: inline-block;
        margin-right: 2px;
        vertical-align: -2px;
      }
      .span {
        color: #666;
        margin-right: 14px;
      }
      .line{
        margin: 0 8px 0 8px;
        color: #D9D9D9;
      }
    }
  }
`
