'use client'
import { Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { useLocalStorageSync } from './useLocalStorageSync';
import { useEffect, useState } from 'react';

export default function Home() {
  useLocalStorageSync();
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(()=>{
    const get = async ()=>{
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await res.json();
      
      const breeds = Object.keys(data.message);
      setBreeds(breeds);
    }
    get();
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-4'>Breeds</h1>
      <div className="absolute top-4 right-8">
        <Button variant="contained" href={'/favorites'}>
          View Favorites
        </Button>
      </div>
      <List className='grid grid-cols-3 gap-2 overflow-y-auto h-[calc(90vh-100px)] mx-auto xs:w-full sm:w-3/4'>
        {breeds.map((breed) => (
          <ListItem key={breed} >
            <Card className='w-full py-2 px-1'>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" className='capitalize'> {breed} </Typography>
              </CardContent>
              <div className="flex justify-end">
                <Button href={`/breed/${breed}`}>View</Button>
              </div>
                
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
}