import React, { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { requestImagesByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<Image | null>(null);

  const onSetQuery = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const data = await requestImagesByQuery(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevImages) => [...(prevImages || []), ...data]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const openModal = (image: Image) => {
    setModalImg(image);
    setModalIsOpen(true);
  };

  return (
    <>
      <SearchBar onSetQuery={onSetQuery} />
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} isLoading={isLoading} openModal={openModal} />}
      {images && <LoadMoreBtn setPage={setPage} />}
      <ImageModal modalImg={modalImg} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
}

export default App;
