'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favoritesSlice';
import { RootState } from '../../store';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import { useLocalStorageSync } from '../useLocalStorageSync';

interface BreedDetailProps {
  breed: string;
  breedImages: string[];
}

const BreedDetail: React.FC<BreedDetailProps> = ({ breed, breedImages }) => {
  useLocalStorageSync();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites[breed] || []);

  const handleToggleFavorite = (image: string) => {
    dispatch(toggleFavorite({ breed, image }));
  };

  return (
    <div>
      <Button variant="contained" href={'/'} className='absolute top-8 left-8'>&lt; Volver</Button>
      <Typography variant='h3' className='text-2xl py-4 font-bold text-center my-4 capitalize'>{breed} Imágenes</Typography>
      
      <ImageList className='mx-auto w-3/4 h-[calc(90vh-100px)]' cols={3} rowHeight={164}>
        {breedImages.map((image) => (
          <ImageListItem className='relative' key={image} onClick={() => handleToggleFavorite(image)}>
            <img
              src={image}
              alt={breed}
              loading="lazy"
              className='w-full !h-full '/>
            {favorites.includes(image) ? <span className='absolute top-2 right-2'>❤️</span> : ''}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default BreedDetail;

