'use client'
import { RootState } from '@/store';
import { toggleFavorite } from '@/store/favoritesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLocalStorageSync = () => {
  const dispatch = useDispatch();
  const {favorites} = useSelector((state: RootState) => state.favorites);
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favorites');
    if (favoritosGuardados) {
      const favoritosParseados = JSON.parse(favoritosGuardados);
      Object.entries(favoritosParseados).forEach(([raza, imagenes]) => {
        (imagenes as string[]).forEach((imagen) => {
          dispatch(toggleFavorite({ breed: raza, image: imagen }));
        });
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
};
