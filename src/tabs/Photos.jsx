import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Loader, Button } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getPhotos(query, page);
        setImages(prev => [...prev, ...data.photos]);
      } catch (error) {
        alert('Oops! Something went wrong...');
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query, page]);

  const getQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Form onSubmit={getQuery} />

      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}

      {!query && <Text textAlign="center">Let`s begin search 🔎</Text>}

      {isLoading && <Loader />}

      <PhotosGallery images={images} />

      {images.length > 0 && (
        <Button onClick={handleLoadMore} disabled={isLoading}>
          Load More
        </Button>
      )}
    </>
  );
};
