import styled from 'styled-components'
export const BannerWrapper = styled.div`
  .banner{
    height:285px;
    display: flex;
    position: relative;
  }
`
export const BannerRight = styled.a.attrs({
  href:'https://music.163.com/#/download',
  target:'_blank'
})`
  width:254px;
  height:285px;
  background: url(${require('@/assets/img/download_sprite.png')})no-repeat 0 0;
`
// position: absolute;
// display:block;
// top:0;
// right:0;
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      height: 100%;
    }
  }
  .dots {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  > li {
    margin: 0 2px;
    .item {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
      cursor: pointer;
      &:hover,
      &.active{
        background-position: -16px -343px;
      }
    }
  }
}
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translatey(-50%);
  height:63px;
  .btn {
    position: absolute;
    height:63px;
    width:37px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    border:0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
// background: url(${(props) => props.bgImage}) center center/6000px;
