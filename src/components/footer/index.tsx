import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import {FooterWrapper} from './style'
interface IProps {
  name?: ReactNode
}
const AppFooter: FC<IProps> = () => {
  return <FooterWrapper>
    <div className="content wrap-v2">
      <div className="top">
        <ul>
          <li>
            <a className="logonew logo-openplatform sprite_foot" href="https://developer.music.163.com/st/developer" target="_blank"></a>
            <span className="tt">音乐开放平台</span>
          </li>
          <li>
            <a className="logonew logo-trade sprite_foot" href="//music.163.com/st/web-sublicense/home" target="_blank"></a>
            <span className="tt">云村交易所</span>
          </li>
          <li>
            <a className="logonew logo-xstudio sprite_foot2" href="https://xstudio.music.163.com" target="_blank"></a>
            <span className="tt">X StudioAI歌手</span>
          </li>
          <li>
            <a className="logonew logo-auth sprite_foot" href="//music.163.com/st/userbasic#/auth" target="_blank"></a>
            <span className="tt">用户认证</span>
          </li>
          <li>
            <a className="logonew logo-musician sprite_foot1" href="https://tianyin.music.163.com" target="_blank"></a>
            <span className="tt">AI 免费写歌</span>
          </li>
          <li>
            <a className="logonew logo-cloudsong sprite_foot3" href="https://music.163.com/st/ad-song" target="_blank"></a>
            <span className="tt">云推歌</span>
          </li>
          <li>
            <a className="logonew logo-reward sprite_foot" href="//music.163.com/web/reward" target="_blank"></a>
            <span className="tt">赞赏</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="link" id="music-link">
          <a href="//st.music.163.com/official-terms/service" target="_blank" className="item s-fc3">服务条款</a><span className="line">|</span>
          <a href="//st.music.163.com/official-terms/privacy" target="_blank" className="item s-fc3">隐私政策</a><span className="line">|</span>
          <a href="//st.music.163.com/official-terms/children" target="_blank" className="item s-fc3">儿童隐私政策</a><span className="line">|</span>
          <a href="//music.163.com/st/staticdeal/complaints.html" target="_blank" className="item s-fc3">版权投诉</a><span className="line">|</span>
          <a href="http://ir.music.163.com" target="_blank" className="item s-fc3">投资者关系</a><span className="line">|</span>
          <a href="https://music.163.com/ui/resource" rel="noopener noreferrer" target="_blank" className="item s-fc3">广告合作</a>
          <span className="line">|</span>
          <a  href="//mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station" target="_blank" className="s-fc3">联系我们</a>
        </p>
        <p className="right">
          <a href="https://jubao.163.com" target="_blank">廉正举报</a>
          <span className="sep span">不良信息举报邮箱: 51jubao@service.netease.com</span>
          <span className="span">客服热线：95163298</span>
        </p>
        <p className="right">
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          <span>增值电信业务经营许可证：浙B2-20150198</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className="alink s-fc3">粤B2-20090191-18&nbsp;&nbsp;浙ICP备15006616号-4&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
        </p>
        <p className="right">
          <span>网易公司版权所有©1997-2025</span><span>杭州乐读科技有限公司运营：</span>
          <a href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34942157981/2e30/30c1/ad1f/7be053a28e91dd8bafe49bdf6455cb2a.png" target="_blank" className="alink s-fc3">浙网文[2024] 0900-042号</a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className="alink s-fc3 police-link">
            <span className="police-logo"></span>
            <span>浙公网安备 33010802013307号</span>
          </a>
          <a href="https://y.music.163.com/m/at/661f2af6e36f7c50ead8994b" rel="noopener noreferrer" target="_blank" className="alink s-fc3 police-link">
          <span>算法服务公示信息</span>
          </a>
        </p>
      </div>
    </div>
  </FooterWrapper>
}

export default memo(AppFooter)
