import React,{ Suspense,useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/header'
import AppFooter from './components/footer'
import PlayerBar from './views/player/play-bar'
import {useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from './views/player/store/player'
function App() {
  const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(fetchCurrentSongAction(2705320803))
    },[])
  return (
    <div className="App">
      <Header/>
      <Suspense fallback='loading...'>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter/>
      <PlayerBar/>
    </div>
  );
}

export default App;
