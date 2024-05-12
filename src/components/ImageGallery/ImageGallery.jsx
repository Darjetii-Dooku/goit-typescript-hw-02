import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images, isLoading, openModal }) => {
    // console.log(images);

    return <ul className={css.gallery}>
        {isLoading && <Loader />}
        {Array.isArray(images) && images.map(image => { 
        return (
        <li key={image.id} onClick={() => openModal(image)}>
            <ImageCard src={image.urls.small} alt={image.alt_description} isLoading={isLoading} />
		</li>)
    })}
	</ul>
};
export default ImageGallery;