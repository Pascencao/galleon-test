'use client'

import React from 'react';
import { Button, Card, CardContent, List, ListItem, Typography } from '@mui/material';

interface BreedListProps {
  breeds: string[];
}

const BreedList: React.FC<BreedListProps> = ({ breeds }) => {
  return (
    <List className='grid grid-cols-3 gap-1 overflow-y-auto h-[calc(90vh-100px)] mx-auto xs:w-full sm:w-3/4'>
      {breeds.map((breed) => (
        <ListItem key={breed}>
          <Card className='w-full py-2 px-1'>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" className='capitalize'>
                {breed}
              </Typography>
            </CardContent>
            <div className="flex justify-end">
              <Button href={`/breed/${breed}`}>View</Button>
            </div>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default BreedList;
