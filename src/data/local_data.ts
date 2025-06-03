// import styled from 'styled-components'


export const discoverMenu = [
  {
    title:'推荐',
    link:'/discover/recommend'
  },
  {
    title:'排行榜',
    link:'/discover/ranking'
  },
  {
    title:'歌单',
    link:'/discover/songs'
  },
  {
    title:'播客有声书',
    link:'/discover/djradio'
  },
  {
    title:'歌手',
    link:'/discover/artist'
  },
  {
    title:'新碟上架',
    link:'/discover/album'
  },
]
export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "意见反馈",
    link: "#"
  }
]

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth"
  },
  {
    link: "https://music.163.com/recruit"
  },
  {
    link: "https://music.163.com/web/reward"
  },
  {
    link: "https://music.163.com/uservideo#/plan"
  }
]

// discover中的数据
export const dicoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend"
  },
  {
    title: "排行榜",
    link: "/discover/ranking"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "主播电台",
    link: "/discover/djradio"
  },
  {
    title: "歌手",
    link: "/discover/artist"
  },
  {
    title: "新碟上架",
    link: "/discover/album"
  },
]

// 热门主播
export const hotRadios = [
  {
    picUrl: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485"
  },
  {
    picUrl: "https://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40",
    name: "刘维-Julius",
    position: "歌手、播客节目《维维道来》主理人",
    url: "/user/home?id=559210341",
  },
  {
    picUrl: "https://p1.music.126.net/x-DhADCAweo7fKUpVR79Pw==/109951170205405591.jpg?param=40y40",
    name: "莫非定律乐团",
    position: "男女双人全创作独立乐团",
    url: "/user/home?id=259292486",
  },
  {
    picUrl: "	https://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40",
    name: "碎嘴许美达",
    position: "脱口秀网络红人",
    url: "/user/home?id=1450418799",
  },
  {
    picUrl: "	https://p1.music.126.net/mMZvNruOjEa4XNL6-lWjNg==/109951168919647064.jpg?param=40y40",
    name: "银临Rachel",
    position: "以音为帆，以歌为筏，以真作舵，以梦载风。 原创音乐人，2020年发布最新个人专辑《琉璃》，代表作《腐草为萤》《锦鲤抄》《牵丝戏》。",
    url: "/user/home?id=2688170"
  }
]

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001"
      }
    ]
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3
      }
    ]
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3
      },
    ]
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3
      },
    ]
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3
      },
    ]
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3
      }
    ]
  },
]
