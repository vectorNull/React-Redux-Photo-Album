 import { useState, useCallback } from "react";
 import { useDispatch } from "react-redux";
 
 /* 
  * A typical Promise (which is what is returned by the dispatch function) has a .then() and a .catch() attached to it. 
  * If the promise if fulfilled, it runs the .then(); if there is an error, it runs the catch().
  * However, this chain of event is broken when we use dispatch(). 
  * The Promise's .then() gets called WHETHER THE REQUEST SUCCEEDS OR FAILS. 
  * The argument of the .then() is the fulfilled or rejected action object.
  *
  * Chaining on a .unwrap() to the dispatch() will restore the Promise's behavior. You then add your .then() and .catch()
  * In the example below, we don't need the .then() because we were simply using it to setIsLoadingUsers to false which
  * is taken care of by the finally().
  */
 export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setIsLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
};