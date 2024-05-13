export interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
}
interface Results {
    results: Image[]
}
export interface ImageGalleryProps {
    images: Results;
    isLoading: boolean;
    openModal: (image: Image) => void;
}