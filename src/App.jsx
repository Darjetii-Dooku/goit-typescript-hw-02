import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { requestImages, requestImagesByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [Iserror, setError] = useState(false);
  const [query, setQuerry] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const onSetQuery = (query) => {
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
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
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
  const openModal = (img) => {
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
