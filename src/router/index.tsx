import React,{ lazy } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import Discover from '@/views/discover/'
// import Download from '@/views/download';
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'

// 懒加载
const Discover = lazy(()=> import('@/views/discover'))
const Download = lazy(()=> import('@/views/download'))
const Mine = lazy(()=> import('@/views/mine'))
const Focus = lazy(()=> import('@/views/focus'))
const Recommend = lazy(()=> import('@/views/discover/c-views/recommend'))
const Songs = lazy(()=> import('@/views/discover/c-views/songs'))
const Artist = lazy(()=> import('@/views/discover/c-views/artist'))
const Album = lazy(()=> import('@/views/discover/c-views/album'))
const Djradio = lazy(()=> import('@/views/discover/c-views/djradio'))
const Ranking = lazy(()=> import('@/views/discover/c-views/ranking'))
const routes = [
  {
    path:'/',
    element:<Navigate to=''/>
  },
  {
    path:'/discover',
    element:<Discover />,
    children:[
      {
        path:'/discover/songs',
        element:<Songs />
      },
      {
        path:'/discover/recommend',
        element:<Recommend />
      },
      {
        path:'/discover/djradio',
        element:<Djradio />
      },
      {
        path:'/discover/album',
        element:<Album />
      },
      {
        path:'/discover/artist',
        element:<Artist />
      },
      {
        path:'/discover/ranking',
        element:<Ranking />
      }
    ]
  },
  {
    path:'/download',
    element:<Download />
  },
  {
    path:'/mine',
    element:<Mine />
  },
  {
    path:'/focus',
    element:<Focus />
  }
];
export default routes;
