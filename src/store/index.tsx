import { configureStore } from '@reduxjs/toolkit'

import {useSelector, useDispatch,TypedUseSelectorHook, shallowEqual} from 'react-redux'

import counterReducer from './modules/counter'
import recommendreducer from '@/views/discover/c-views/recommend/store'
import playerReducer from "@/views/player/store/player"
const store = configureStore({
  reducer:{
    counter: counterReducer,
    recommend: recommendreducer,
    player:playerReducer
  }
})
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch
const state = store.getState()


export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
