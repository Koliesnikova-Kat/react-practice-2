import s from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ image: { avg_color, src, alt } }) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};
