export interface Image {
    urls: {
        regular: string;
    };
    alt_description: string;
}

export interface ImageModalProps {
    modalImg: Image | null;
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}