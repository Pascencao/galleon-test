import BreedDetail from '@/app/components/breedDetail';

async function getBreedImages(breed: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const { message }: { message: string[] } = await res.json();
  return message;
}

const BreedImages = async ({ params }: { params: { breed: string } }) => {
  const breed = params.breed;
  const breedImages = await getBreedImages(breed);

  return <BreedDetail breed={breed} breedImages={breedImages} />;
}

export default BreedImages