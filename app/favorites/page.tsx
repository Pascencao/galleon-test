'use client'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import { useLocalStorageSync } from '../useLocalStorageSync';

const FavoriteImages=()=> {
  useLocalStorageSync()
  const {favorites} = useSelector(({favorites}: RootState) => {
    console.log('favorites',favorites)
    return favorites});
  console.log('favorites 2',favorites)
  return (
    <div>
      <Button variant="contained" href={'/'} className='absolute top-8 left-8'>&lt; Back</Button>
      <Typography variant='h3' className='text-2xl py-4 font-bold text-center my-4 capitalize'>Favorite Images</Typography>
      
      {Object.keys(favorites).map((breed) => (
        <div key={breed} className='mt-4'>
          <Typography variant='h6' className='capitalize mx-auto w-3/4'>{breed}</Typography>
          <ImageList className='mx-auto w-3/4' cols={3} rowHeight={164}>
            {favorites[breed].map((image) => (
              <ImageListItem className='relative' key={image}>
                <img
                  key={image} 
                  src={image}
                  alt={breed}
                  loading="lazy"/>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ))}
    </div>
  );
}
export default FavoriteImages
