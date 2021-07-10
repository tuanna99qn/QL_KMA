import {useState, useEffect} from "react";

export function GlobalState (initialValue) {
  this.value = initialValue
  this.subscribers = [];
  this.getValue = function () {
    return this.value
  }

  this.setValue = function (newState){
    if (this.getValue() == newState){
      return
    }

    this.value = newState
    this.subscribers.forEach( m => {
      m(this.value)
    })
  }

  this.subscribe = function (itemToSubscribe){
    if (  this.subscribers.indexOf(itemToSubscribe) >= 0){
      return
    }
    this.subscribers.push(itemToSubscribe)
  }

  this.unsubscribe = function (itemToUnsubscribe){
    this.subscribers = this.subscribers.fill( m => m != itemToUnsubscribe)
  }

}

export function useGlobalState(globalState) {
  const [,setStateX] = useState()
  const state = globalState.getValue()

  function reRender(newState) {
    setStateX({})
  }
  useEffect(()=>{
    globalState.subscribe(reRender);
    return () => {
      globalState.unsubscribe(reRender)
    }
  })

  function setState(newState) {
    globalState.setValue(newState)
  }

  return [state, setState]
}

global.navigationState = new GlobalState([])
