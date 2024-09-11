"use client"
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../store/favoritesSlice';
import { RootState } from '../../../store';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useLocalStorageSync } from '@/app/useLocalStorageSync';

const BreedImages = () => {
  useLocalStorageSync();

  const {breed:breedResponse}: {breed: string} = useParams()
  const [breed, setbreed] = useState<string>('');
  const [breedImages, setBreedImages] =  useState<string[]>();
  useEffect(()=>{
    const get = async ()=>{
      const res = await fetch(`https://dog.ceo/api/breed/${breedResponse}/images`);
      const {message}:{message: string[]} = await res.json();
      
      setbreed(breedResponse)
      setBreedImages(message)
    }
    get();
  }, [])
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites[breed] || []);
  

  const handleToggleFavorite = (image: string) => {
    dispatch(toggleFavorite({ breed, image }));
  };
  return (
    <div>
      <Button variant="contained" href={'/'} className='absolute top-8 left-8'>&lt; Back</Button>
      <Typography variant='h3' className='text-2xl py-4 font-bold text-center my-4 capitalize'>{breed} Pictures</Typography>
      
      <ImageList className='mx-auto w-3/4 h-[calc(90vh-100px)]' cols={3} rowHeight={164}>
        {breedImages ? breedImages?.map((image) => (
          <ImageListItem className='relative' key={image} onClick={() => handleToggleFavorite(image)}>
            <img
              src={image}
              alt={image}
              loading="lazy"/>
              {favorites.includes(image) ? <span className='absolute top-2 right-2'>❤️</span> : ''}
          </ImageListItem>
          ))  
          : <></>}
      </ImageList>
    </div>
  );
}

export default BreedImages