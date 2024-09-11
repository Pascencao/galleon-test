import { Button } from '@mui/material';
import BreedList from './components/breedList';

async function getBreeds() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  return Object.keys(data.message);
}

export default async function Home() {
  const breeds = await getBreeds();

  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-4'>Breeds</h1>
      <div className="absolute top-4 right-8">
        <Button variant="contained" href={'/favorites'}>
          View Favorites
        </Button>
      </div>
      <BreedList breeds={breeds} />
    </div>
  );
}