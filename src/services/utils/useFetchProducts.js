import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../shelf/action';

function useFetchProducts() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.shelf);
  const fetchData = () => {
    dispatch(fetchProducts());
  }
  useEffect(fetchData, [dispatch]);

  return state;
  
}

export default useFetchProducts