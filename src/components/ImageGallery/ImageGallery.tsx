import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps, Image } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  isLoading,
  openModal,
}) => {
  return (
    <ul className={css.gallery}>
      {isLoading && <Loader />}
      {images.results.map((image: Image) => (
        <li key={image.id} onClick={() => openModal(image)}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
