import { Grid, GridItem, PhotosGalleryItem } from '..';
// import s from './PhotosGallery.module.css';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <GridItem key={image.id}>
          <PhotosGalleryItem image={image} />
        </GridItem>
      ))}
    </Grid>
  );
};
