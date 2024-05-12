import React from "react";
import Loader from "../Loader/Loader";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <div className={css.card}>
        <img className={css.image} src={src} alt={alt} />
        <div>
          <h2 className={css.title}>{alt}</h2>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
