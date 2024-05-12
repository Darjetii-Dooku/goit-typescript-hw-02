import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { requestImages, requestImagesByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageData } from "./App.types";


function App() {
  const [images, setImages] = useState<ImageData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Iserror, setError] = useState<boolean>(false);
  const [query, setQuerry] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<ImageData | null>(null);

  const onSetQuery = (query: string) => {
    setQuerry(query);
  };
  useEffect(() => {
    if (query.length === 0) return;
    console.log("hi");
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImagesByQuery(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevImages) => [...prevImages || [], ...data]);
        }
        // setImages(data.results)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);
  const openModal = (img: ImageData) => {
    console.dir(img);
    setModalImg(img);
    setModalIsOpen(true);
  }
  // console.log("images: ", images);

  return (
    <>
      <SearchBar onSetQuery={onSetQuery} />
      {Iserror && <ErrorMessage />}
      {images && <ImageGallery images={images} isLoading={isLoading} openModal={openModal} />}
      {images && <LoadMoreBtn setPage={setPage} />}
      <ImageModal modalImg={modalImg} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
}

export default App;
