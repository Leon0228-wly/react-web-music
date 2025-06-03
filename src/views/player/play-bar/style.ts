import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const BarControl = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isPlaying'].includes(prop),
})<IBarControl>`
  display: flex;
  align-items: center;
  width: 137px;
  .prev,
  .next {
    width: 28px;
    height: 28px;
    border: none;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    border: none;
    background-position: 0 ${props => (props.isPlaying ? "-165px" : "-204px")};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;
  .image {
    width: 34px;
    height: 35px;
    position: relative;
    >a {
      background: url(${require("@/assets/img/playbar.png")}) 0 -80px;
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 466px;
        margin-right: 10px;
        position: relative;
        top: -3px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          display: block;
          margin-top: -7px;
          background: url(${require("@/assets/img/icon_sprite.png")}) 0 -250px;
          inset-block-start: 4px;
          &::after {
            content: none;
          }
        }
      }

      .time {
        color: #797979;
        .current {
          color: #a1a1a1;
        }

        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`
interface IBarControl {
  isPlaying?:boolean
}
interface IOperator {
  playMode?:number
}
export const Operator = styled.div.withConfig({
  shouldForwardProp: (prop) => !['playMode'].includes(prop),
})<IOperator>`
  display: flex;
  position: relative;
  justify-content: space-between;
  .btn {
    width: 25px;
    height: 25px;
    border: none;
  }
  .left {
    display: flex;
    margin-top: 2px;
    margin-left: -10px;
    .pip {
      background: url(${require("@/assets/img/save_icon.png")}) 0 0;
    }
    .favor {
      background-position: -88px -163px;
    }
    .share {
      background-position: -114px -163px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 173px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.playMode) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }
    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
    .audio-quality {
      display: block;
      background: url(${require("@/assets/img/audio-quality.png")}) no-repeat;
      background-size: 45px 30px;
      margin-left: 4px;
      width: 41px;
      height: 30px;
    }
  }
`
